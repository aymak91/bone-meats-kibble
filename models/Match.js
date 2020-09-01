const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MatchSchema = new Schema({
  dog: {
    type: Schema.Types.ObjectId,
    ref: "dogs"
  },
  requestedDog: {
    type: Schema.Types.ObjectId,
    ref: "dogs",
  },
  isMatched: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: null,
  },
});

const Match = mongoose.model("matches", MatchSchema);
module.exports = Match;
