/*
  Warnings:

  - You are about to drop the column `fechaHoraSalida` on the `viaje` table. All the data in the column will be lost.
  - You are about to drop the column `origen` on the `viaje` table. All the data in the column will be lost.
  - Added the required column `disponible` to the `Viaje` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fechaSalida` to the `Viaje` table without a default value. This is not possible if the table is not empty.
  - Added the required column `horaSalida` to the `Viaje` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `viaje` DROP COLUMN `fechaHoraSalida`,
    DROP COLUMN `origen`,
    ADD COLUMN `disponible` BOOLEAN NOT NULL,
    ADD COLUMN `fechaSalida` DATETIME(3) NOT NULL,
    ADD COLUMN `horaSalida` DATETIME(3) NOT NULL,
    MODIFY `destino` VARCHAR(191) NULL;
