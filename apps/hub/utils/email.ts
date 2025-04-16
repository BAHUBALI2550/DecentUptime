import nodemailer from "nodemailer";

const transport = nodemailer.createTransport({
    service: "Gmail",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
    secure: true, // For SSL
});

export async function sendEmailAlert(
    to: string,
    subject: string,
    text: string
) {
    try {
        await transport.sendMail({
            from: process.env.EMAIL_USER,
            to,
            subject,
            text,
        });
        console.log(`Email sent to ${to}`);
    } catch (e) {
        console.error("Error sending Email: ", e);
    }
}