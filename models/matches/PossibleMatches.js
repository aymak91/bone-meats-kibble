const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PossibleMatchesSchema = new Schema({
  dogId: {
    type: Schema.Types.ObjectId,
    ref: "dogs",
  },
  possibleMatches: [{
    type: Schema.Types.ObjectId,
    ref: "dogs",
  }], //array of dog ids 
  rejectedMatches: [{
    type: Schema.Types.ObjectId,
    ref: "dogs",
  }], //array of dog ids, possibly change to set to increase lookup time for rejected dogs? 
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: null,
  },
});

const PossibleMatches = mongoose.model("possibleMatches", PossibleMatchesSchema);
module.exports = PossibleMatches;
