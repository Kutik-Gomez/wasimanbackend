import app from './app.js';

const PORT = 7010; // Cambia el puerto según tus necesidades
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
app.listen(7004);
console.log("Servicio Inicio:", 7004);

/*

app.listen(7003, () => {
  console.log("Servicio Inicio en el puerto:", 7003);
});
*/
/* import app from "./app.js";
const PORT = process.env.PORT || 7003;
app.listen(PORT, () => {
  console.log(`Servicio iniciado en el puerto ${PORT}`);
});*/

