/*
  Warnings:

  - Added the required column `grafikName` to the `TimeSlots` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "TimeSlots" ADD COLUMN     "grafikName" TEXT NOT NULL;
