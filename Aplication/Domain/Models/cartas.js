//1. importar librerias mongoose
const mongoose = require("mongoose");
const cartaHandler = require("../Handlers/cartaHandler"); //importar la cartasHandler

//2. obtener objeto Schena desde mongoose

const { Schema } = mongoose; //acceder a la clase schema de mongoose

// 3. crear esquema tipo mongoSchema

const mongoSchema = new Schema({
  signo: String,
  valor: Number,
  imagen: String,
  color: String
});

// 3.1 conectar el handler con el modelo
mongoSchema.loadClass(cartaHandler);

//linkear  conectar el mongo esquema con un modelo cdocument de mongodb

const Carta = mongoose.model("cartas", mongoSchema);

//5 exportar el componente Carta

module.exports = Carta;
