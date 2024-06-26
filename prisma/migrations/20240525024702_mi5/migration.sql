/*
  Warnings:

  - Added the required column `cantidadAsientos` to the `Reserva` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `reserva` ADD COLUMN `cantidadAsientos` INTEGER NOT NULL;
