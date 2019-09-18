const mongoose = require("mongoose");
const { Schema } = mongoose;

const MongoSchema = new Schema({
  nombre: {
    type: String,
    require: true,
    maxlength: 20,
    min: 3
  }
});
