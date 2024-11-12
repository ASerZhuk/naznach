/*
  Warnings:

  - The `dayOfWeek` column on the `TimeSlots` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "TimeSlots" DROP COLUMN "dayOfWeek",
ADD COLUMN     "dayOfWeek" INTEGER[];
