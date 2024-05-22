import express  from "express";
import { consultar } from "../controllers/usuariosController.js";

const router = express.Router();

router.get("/usuarios", consultar);



export default router;