const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MatchesSchema = new Schema({
    dogId: {
        type: Schema.Types.ObjectId,
        ref: "dogs",
    },
    matches: [{
        type: Schema.Types.ObjectId,
        ref: "dogs",
    }], //array of dog ids 
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: null,
    },
});

const Matches = mongoose.model("matches", MatchesSchema);
module.exports = Matches;
