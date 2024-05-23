import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const consultar = async (req, res) => {
  try {
    const usuarios = await prisma.usuario.findMany();
    res.json(usuarios);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener usuarios" });
  }
};

export const guardar = async (req, res) => {
  try {
    const usuario = await prisma.usuario.create({ data: req.body });
    res.json(usuario);
  } catch (error) {
    res.status(500).json({ error: "Error al guardar usuario" });
  }
};

export const actualizar = async (req, res) => {
  try {
    const usuario = await prisma.usuario.update({
      where: { id: parseInt(req.params.id) },
      data: req.body,
    });
    res.json(usuario);
  } catch (error) {
    res.status(500).json({ error: "Error al actualizar usuario" });
  }
};

export const eliminar = async (req, res) => {
  try {
    const usuario = await prisma.usuario.delete({
      where: { id: parseInt(req.params.id) },
    });
    res.json(usuario);
  } catch (error) {
    res.status(500).json({ error: "Error al eliminar usuario" });
  }
};

export const buscador = async (req, res) => {
  const nombre = req.params.nombre.toLowerCase();
  try {
    const usuarios = await prisma.usuario.findMany({
      where: { nombre: { contains: nombre } },
    });
    res.json(usuarios);
  } catch (error) {
    res.status(500).json({ error: "Error al buscar usuario" });
  }
};


//Actualizar el perfil de usuario cuando esta dentro de la aplicacion
export const actualizarPerfil = async (req, res) => {
  const usuarioId = req.session.userId;
  const { nombre, email } = req.body;

  try {
    const usuarioActualizado = await prisma.usuario.update({
      where: { id: usuarioId },
      data: { nombre, email },
    });
    res.json(usuarioActualizado);
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar el perfil del usuario' });
  }
};