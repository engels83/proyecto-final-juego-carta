const mongoose = require("mongoose");
const { Schema } = mongoose;

const MongoSchema = new Schema({
  nombre: {
    type: String,
    require: true,
    unique: true,
    maxlength: 20,
    min: 3
  },
  correo:{
    type: String,
    require:true,
    unique :true
  },
  password:{
    type: String,
    required:true,
  }

});

const Usuario = mongoose.model("users", mongoSchema);  

//5 exportar el componente Carta

module.exports = Usuario;

