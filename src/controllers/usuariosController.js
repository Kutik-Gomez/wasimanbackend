import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();


export const consultar = async (req, res) => {
    const consulta = await prisma.usuarios.findMany()
    res.json(consulta);
};
