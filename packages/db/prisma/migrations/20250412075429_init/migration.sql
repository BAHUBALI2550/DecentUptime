-- AlterTable
ALTER TABLE "Validator" ADD COLUMN     "pendingPayouts" INTEGER NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE "Website" ADD COLUMN     "disabled" BOOLEAN NOT NULL DEFAULT false;
