/*
  Warnings:

  - You are about to drop the column `passkey` on the `User` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "User_passkey_idx";

-- DropIndex
DROP INDEX "User_passkey_key";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "passkey";
