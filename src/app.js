
import express from 'express';
import usuariosRoutes from './routes/usuarios.routes.js'
import autoRoutes from './routes/auto.routes.js';

const app = express();

app.use(express.json());
//Rutas
app.use('/api', usuariosRoutes)
app.use('/auth', autoRoutes);



export default app;
