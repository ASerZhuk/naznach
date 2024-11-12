/*
  Warnings:

  - You are about to drop the column `dayOfWeek` on the `WorkSchedule` table. All the data in the column will be lost.
  - You are about to drop the column `interval` on the `WorkSchedule` table. All the data in the column will be lost.
  - You are about to drop the `Booking` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ExcludedDays` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[specialistId,weekday]` on the table `WorkSchedule` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `weekday` to the `WorkSchedule` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `startTime` on the `WorkSchedule` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `endTime` on the `WorkSchedule` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropForeignKey
ALTER TABLE "Booking" DROP CONSTRAINT "Booking_specialistId_fkey";

-- DropForeignKey
ALTER TABLE "Booking" DROP CONSTRAINT "Booking_userId_fkey";

-- DropForeignKey
ALTER TABLE "ExcludedDays" DROP CONSTRAINT "ExcludedDays_specialistId_fkey";

-- DropForeignKey
ALTER TABLE "WorkSchedule" DROP CONSTRAINT "WorkSchedule_specialistId_fkey";

-- DropIndex
DROP INDEX "WorkSchedule_specialistId_dayOfWeek_key";

-- DropIndex
DROP INDEX "WorkSchedule_specialistId_key";

-- AlterTable
ALTER TABLE "WorkSchedule" DROP COLUMN "dayOfWeek",
DROP COLUMN "interval",
ADD COLUMN     "isDayOff" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "weekday" INTEGER NOT NULL,
DROP COLUMN "startTime",
ADD COLUMN     "startTime" TIMESTAMP(3) NOT NULL,
DROP COLUMN "endTime",
ADD COLUMN     "endTime" TIMESTAMP(3) NOT NULL;

-- DropTable
DROP TABLE "Booking";

-- DropTable
DROP TABLE "ExcludedDays";

-- CreateIndex
CREATE UNIQUE INDEX "WorkSchedule_specialistId_weekday_key" ON "WorkSchedule"("specialistId", "weekday");

-- AddForeignKey
ALTER TABLE "WorkSchedule" ADD CONSTRAINT "WorkSchedule_specialistId_fkey" FOREIGN KEY ("specialistId") REFERENCES "Specialist"("userId") ON DELETE CASCADE ON UPDATE CASCADE;
