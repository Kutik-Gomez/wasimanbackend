import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const consultar = async (req, res) => {
  try {
    const reservas = await prisma.reserva.findMany({
      include: {
        usuario: true,
        viaje: true,
      },
    });
    res.json(reservas);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener reservas" });
  }
};

export const guardar = async (req, res) => {
  try {
    const reserva = await prisma.reserva.create({
      data: {
        usuarioId: req.body.usuarioId,
        viajeId: req.body.viajeId,
        fechaHoraReserva: new Date(),
        estadoReserva: req.body.estadoReserva,
      },
    });
    res.json(reserva);
  } catch (error) {
    res.status(500).json({ error: "Error al guardar reserva" });
  }
};

export const actualizar = async (req, res) => {
  try {
    const reserva = await prisma.reserva.update({
      where: { id: parseInt(req.params.id) },
      data: req.body,
    });
    res.json(reserva);
  } catch (error) {
    res.status(500).json({ error: "Error al actualizar reserva" });
  }
};

export const eliminar = async (req, res) => {
  try {
    const reserva = await prisma.reserva.delete({
      where: { id: parseInt(req.params.id) },
    });
    res.json(reserva);
  } catch (error) {
    res.status(500).json({ error: "Error al eliminar reserva" });
  }
};

export const buscarPorUsuario = async (req, res) => {
  try {
    const reservas = await prisma.reserva.findMany({
      where: { usuarioId: parseInt(req.params.usuarioId) },
      include: {
        viaje: true,
      },
    });
    res.json(reservas);
  } catch (error) {
    res.status(500).json({ error: "Error al buscar reservas por usuario" });
  }
};

export const buscarPorViaje = async (req, res) => {
  try {
    const reservas = await prisma.reserva.findMany({
      where: { viajeId: parseInt(req.params.viajeId) },
      include: {
        usuario: true,
      },
    });
    res.json(reservas);
  } catch (error) {
    res.status(500).json({ error: "Error al buscar reservas por viaje" });
  }
};

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
        viaje: true,
      },
    });
    res.status(200).json(reservas);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener las reservas" });
  }
};

export const deleteReserva = async (req, res) => {
  const usuarioId = req.session.userId;
  const reservaId = parseInt(req.params.id);

  try {
    const reserva = await prisma.reserva.findUnique({
      where: { id: reservaId },
    });

    if (!reserva || reserva.usuarioId !== usuarioId) {
      return res
        .status(403)
        .json({ error: "No tienes permiso para eliminar esta reserva" });
    }

    await prisma.reserva.delete({
      where: { id: reservaId },
    });

    res.status(200).json({ message: "Reserva eliminada correctamente" });
  } catch (error) {
    res.status(500).json({ error: "Error al eliminar la reserva" });
  }
};
