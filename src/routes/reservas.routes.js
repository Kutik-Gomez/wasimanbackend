import express from "express";
import {
  consultar,
  guardar,
  actualizar,
  eliminar,
  buscarPorUsuario,
  buscarPorViaje,
  createReserva,
  getReservas,
  deleteReserva,
} from "../controllers/reservasController.js";
import { estaAutenticado } from "../middlewares/autenticarMiddleware.js";

const router = express.Router();

router.get("/", consultar);
router.post("/", guardar);
router.put("/:id", actualizar);
router.delete("/:id", eliminar);
router.get("/usuario/:usuarioId", buscarPorUsuario);
router.get("/viaje/:viajeId", buscarPorViaje);

router.post("/crear", estaAutenticado, createReserva);
router.get("/mis-reservas", estaAutenticado, getReservas);
router.delete("/eliminar/:id", estaAutenticado, deleteReserva);

export default router;
