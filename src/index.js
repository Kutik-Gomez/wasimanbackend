import app from "./app.js";
const PORT = process.env.PORT || 7003;
app.listen(PORT, () => {
  console.log(`Servicio iniciado en el puerto ${PORT}`);
});