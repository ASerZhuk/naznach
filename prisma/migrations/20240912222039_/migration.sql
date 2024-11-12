/*
  Warnings:

  - You are about to drop the column `disDays` on the `Specialist` table. All the data in the column will be lost.
  - You are about to drop the column `endTime` on the `Specialist` table. All the data in the column will be lost.
  - You are about to drop the column `interval` on the `Specialist` table. All the data in the column will be lost.
  - You are about to drop the column `slotTime` on the `Specialist` table. All the data in the column will be lost.
  - You are about to drop the column `startTime` on the `Specialist` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Specialist" DROP COLUMN "disDays",
DROP COLUMN "endTime",
DROP COLUMN "interval",
DROP COLUMN "slotTime",
DROP COLUMN "startTime";

-- CreateTable
CREATE TABLE "WorkSchedule" (
    "id" SERIAL NOT NULL,
    "specialistId" BIGINT NOT NULL,
    "dayOfWeek" INTEGER NOT NULL,
    "startTime" TEXT NOT NULL,
    "endTime" TEXT NOT NULL,
    "interval" INTEGER NOT NULL,

    CONSTRAINT "WorkSchedule_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Booking" (
    "id" SERIAL NOT NULL,
    "specialistId" BIGINT NOT NULL,
    "userId" BIGINT NOT NULL,
    "bookingTime" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Booking_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ExcludedDays" (
    "id" SERIAL NOT NULL,
    "specialistId" BIGINT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ExcludedDays_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "WorkSchedule_specialistId_key" ON "WorkSchedule"("specialistId");

-- CreateIndex
CREATE UNIQUE INDEX "WorkSchedule_specialistId_dayOfWeek_key" ON "WorkSchedule"("specialistId", "dayOfWeek");

-- CreateIndex
CREATE UNIQUE INDEX "Booking_specialistId_bookingTime_key" ON "Booking"("specialistId", "bookingTime");

-- CreateIndex
CREATE UNIQUE INDEX "ExcludedDays_specialistId_date_key" ON "ExcludedDays"("specialistId", "date");

-- AddForeignKey
ALTER TABLE "WorkSchedule" ADD CONSTRAINT "WorkSchedule_specialistId_fkey" FOREIGN KEY ("specialistId") REFERENCES "Specialist"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Booking" ADD CONSTRAINT "Booking_specialistId_fkey" FOREIGN KEY ("specialistId") REFERENCES "Specialist"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Booking" ADD CONSTRAINT "Booking_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("telegramId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ExcludedDays" ADD CONSTRAINT "ExcludedDays_specialistId_fkey" FOREIGN KEY ("specialistId") REFERENCES "Specialist"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;
