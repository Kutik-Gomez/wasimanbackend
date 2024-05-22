import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const createReserva = async (req, res) => {
  const { viajeId, estadoReserva } = req.body;
  const usuarioId = req.session.userId;
  const fechaHoraReserva = new Date();

  try {
    const reserva = await prisma.reserva.create({
      data: {
        usuarioId,
        viajeId,
        fechaHoraReserva,
        estadoReserva,
      },
    });
    res.status(201).json(reserva);
  } catch (error) {
    res.status(500).json({ error: "Error al crear la reserva" });
  }
};

export const getReservas = async (req, res) => {
  const usuarioId = req.session.userId;

  try {
    const reservas = await prisma.reserva.findMany({
      where: { usuarioId },
      include: {
        viaje: true, // Incluye la información del viaje relacionado
      },
    });
    res.status(200).json(reservas);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener las reservas" });
  }
};
