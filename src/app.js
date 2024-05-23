import express from "express";
import session from "express-session";
import autenticarRoutes from "./routes/autenticar.routes.js";
import { errorHandler } from './middlewares/errorHandler.js';

const app = express();
app.use(express.json());

app.use(
  session({
    secret: "tu-secreto-aqui",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true }, // Asegúrate de usar true si estás en producción y usando HTTPS
  })
);
//Rutas inicio de API REST
app.use("/autenticar", autenticarRoutes);

app.use(errorHandler);
export default app;
