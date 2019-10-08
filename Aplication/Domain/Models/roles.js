const mongoose = require("mongoose");
const { Schema } = mongoose;
const handler = require("../Handlers/roleHandler");

const mongoSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      minlength: 4,
      unique: true
    },
    description: String
  },
  {
    timestamps: true
  }
);

// handler here
mongoSchema.loadClass(handler);

const Role = mongoose.model("roles", mongoSchema);
module.exports = Role;
