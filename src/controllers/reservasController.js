import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Obtener todas las reservas
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

// Crear una nueva reserva
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

// Actualizar una reserva existente
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

// Eliminar una reserva existente
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

// Buscar reservas por usuarioId
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

// Buscar reservas por viajeId
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
