import express  from "express";
import { consultar, guardar, actualizar, eliminar, buscador } from "../controllers/usuariosController.js";

const router = express.Router();

router.get("/usuarios", consultar);
router.post("/usuarios", guardar);
router.put("/usuarios/:id", actualizar);
router.delete("/usuarios/:id", eliminar);
router.get("/usuarios/:nombre", buscador);



export default router;