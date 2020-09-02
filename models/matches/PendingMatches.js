const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PendingMatchesSchema = new Schema({
    dogId: {
        type: Schema.Types.ObjectId,
        ref: "dogs",
    },
    pendingMatches: [{
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

const PendingMatches = mongoose.model("pendingMatches", PendingMatchesSchema);
module.exports = PendingMatches;
