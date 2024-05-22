import express from 'express';
import { createReserva, getReservas } from '../controllers/reservasController.js';
import { isAuthenticated } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.post('/', isAuthenticated, createReserva);
router.get('/', isAuthenticated, getReservas);

export default router;
