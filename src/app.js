import express from "express";
import session from "express-session";
//rutas que se esta importando
import usuariosRoutes from "./routes/usuarios.routes.js";
import autoRoutes from "./routes/auto.routes.js";
import reservasRoutes from "./routes/reservas.routes.js";

const app = express();

app.use(express.json());
app.use(
  session({
    secret: "tu-secreto-aqui",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }, // Asegúrate de usar true si estás en producción y usando HTTPS
  })
);
//Rutas
app.use("/api", usuariosRoutes);
app.use("/auth", autoRoutes);
app.use('/reservas', reservasRoutes);

export default app;
