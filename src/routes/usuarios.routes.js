import express from 'express';
import { consultar, guardar, actualizar, eliminar, buscador,actualizarPerfil } from '../controllers/usuariosController.js';

import { estaAutenticado, estaAutorizado } from '../middlewares/autenticarMiddleware.js';

const router = express.Router();

router.get('/', consultar);
router.post('/', guardar);
router.put('/:id', actualizar);
router.delete('/:id', eliminar);
router.get('/buscar/:nombre', buscador);

//Para que actualice el perfil
router.put('/perfil', estaAutenticado, estaAutorizado, actualizarPerfil);

export default router;
