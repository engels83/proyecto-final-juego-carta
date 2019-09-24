const mongoose = require("mongoose");
const { Schema } = mongoose;
const matchHandler = require("../Handlers/matchHandler");

const mongoSchema = new Schema(
  {
    keyWord: {
      type: String,
      required: true,
      maxlength: 10,
      minlength: 9
    },
    moderatorId: {
      type: Schema.Types.ObjectId
    },
    players: []
  },
  {
    timestamps: true
  }
);

// handler
mongoSchema.loadClass(matchHandler);
// bind
const Match = mongoose.model("matches", mongoSchema);
module.exports = Match;
