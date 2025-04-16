import express from "express"
import { authMiddleware } from "./middleware";
import { prismaClient } from "db/client";
import cors from "cors";
import { SystemProgram, Connection, PublicKey, VersionedTransaction, TransactionMessage, Keypair, clusterApiUrl } from "@solana/web3.js";
import { redis } from "cache/client";


const connection = new Connection(clusterApiUrl("devnet"));
const app = express();

app.use(cors());
app.use(express.json());

app.post("/api/v1/website", authMiddleware as any, async (req, res) => {
    const userId = req.userId!;
    const { url, email } = req.body;

    const data = await prismaClient.website.create({
        data: {
            userId,
            url,
            email
        }
    })

    res.json({
        id: data.id
    })
})

app.get("/api/v1/website/status", authMiddleware as any, async (req, res) => {
    const websiteId = req.query.websiteId! as unknown as string;
    const userId = req.userId;

    const data = await prismaClient.website.findFirst({
        where: {
            id: websiteId,
            userId,
            disabled: false
        },
        include: {
            ticks: true
        }
    })

    res.json(data)

})

app.get("/api/v1/websites", authMiddleware as any, async (req, res) => {
    const userId = req.userId!;

    const websites = await prismaClient.website.findMany({
        where: {
            userId,
            disabled: false
        },
        include: {
            ticks: true
        }
    })

    res.json({
        websites
    })
})

app.delete("/api/v1/website/", authMiddleware as any, async (req, res) => {
    const websiteId = req.body.websiteId;
    const userId = req.userId!;

    await prismaClient.website.update({
        where: {
            id: websiteId,
            userId
        },
        data: {
            disabled: true
        }
    })

    res.json({
        message: "Deleted website successfully"
    })
})

app.post("/api/v1/payout/:validatorId", async (req, res) => {
   const validatorId = req.params.validatorId;
   const validator = await prismaClient.validator.findFirst({
    where:{
        id: validatorId,
    }
   });

   if(!validator){
    res.json({
        message: "No such Validator Found in Database"
    })
    return;
   }

   if(validator.payoutLocked){
    res.json({
        message: "Payout is locked, Please Wait for some time and try Again to get your payout"
    })
    return;
   }

   await redis.lpush("payouts", validatorId);
   res.json({
    message: "Payout queued successfully"
   })
   return;


})

app.listen(8080);

async function main() {
    setInterval(async () => {
        await transferPayouts();
        await verifyTransactions();
    }, 3000)
}

main();

async function transferPayouts() {

    const validatorId = await redis.rpop("payouts");

    try{
        if(validatorId) {
            const validator = await prismaClient.validator.findFirst({
                where:{
                    id: validatorId,
                }
            });

            if(validator && !validator.payoutLocked){
                await prismaClient.validator.update({
                    where: {
                        id: validatorId
                    },
                    data: {
                        payoutLocked: true
                    }
                });

                const keypair = Keypair.fromSecretKey(Uint8Array.from(JSON.parse(process.env.PRIVATE_KEY!)));

                const lamports = validator.pendingPayouts;
                const transferId = SystemProgram.transfer({
                    fromPubkey: keypair.publicKey,
                    toPubkey: new PublicKey(validator.publicKey),
                    lamports,
                });

                const {blockhash} = await connection.getLatestBlockhash();

                const messageV0 = new TransactionMessage({
                    payerKey:keypair.publicKey,
                    recentBlockhash: blockhash,
                    instructions: [transferId],
                }).compileToV0Message();

                const versionedTx = new VersionedTransaction(messageV0);
                versionedTx.sign([keypair]);

                console.log(`Sending Payout to validator ${validator.publicKey} with Id: ${validatorId} with Amount: ${validator.pendingPayouts}`);

                const tnx = await connection.sendTransaction(versionedTx);
                const payload = {validatorId, tnx, payoutAmount: validator.pendingPayouts}
                await redis.lpush("txVerification", JSON.stringify(payload));
            }
        }
    } catch(e) {
        console.log("Error Sending Payout");
        console.error(e);
    }

}


async function verifyTransactions() {
    const payload = await redis.rpop("txVerification");
    
    if(payload){
        const {validatorId, tnx, payoutAmount} : {validatorId: string, tnx: string, payoutAmount: number} = JSON.parse(payload);

        // verifying the transaction
        const result = await connection.getParsedTransaction(tnx,{ maxSupportedTransactionVersion: 0, commitment:"confirmed"});

        console.log("Transaction Result for ", tnx);
        console.dir(result, {depth:null});

        // if transaction is not updated immediately
        if(!result){
            await redis.lpush("txVerification", JSON.stringify({validatorId, tnx, payoutAmount}));
            return;
        }

        const previousBal = result?.meta?.preBalances;
        const postBal = result?.meta?.postBalances;

        let isPaidSuccess = false;
        const fee = result.meta?.fee;

        if(previousBal && postBal && fee && postBal[1] - previousBal[1] === payoutAmount && previousBal[0] - postBal[0] === (fee + payoutAmount)){
            isPaidSuccess = true;
            console.log("Transaction verified successfully for ", tnx);
        }

        if(!isPaidSuccess){
            return;
        } else{
            await prismaClient.$transaction(async tnx => {
                const validator = await tnx.validator.findUnique({
                    where:{
                        id: validatorId,
                    }
                });
                if(!validator){
                    console.log("Validator ID not matches any of the entry in DB", validator)
                    return;
                }

                // When We set to 0, The amount after locked will be lost, so to handle that
                const balanceToSet = validator.pendingPayouts - payoutAmount;

                await tnx.validator.update({
                    where: {
                        id: validatorId
                    },
                    data:{
                        payoutLocked: false,
                        pendingPayouts: balanceToSet,
                    }
                });
            })
        }
    }
}