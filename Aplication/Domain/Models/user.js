const userHandler = require("../Handlers/userHandler");

const mongoose = require("mongoose");
const { Schema } = mongoose;

const MongoSchema = new Schema(
  {
    nombre: {
      type: String,
      required: true,
      unique: true,
      maxlength: 20,
      min: 3
    },
    correo: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
);

MongoSchema.loadClass(userHandler);

const Usuario = mongoose.model("users", MongoSchema);

//5 exportar el componente Carta

module.exports = Usuario;
