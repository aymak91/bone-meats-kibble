const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RequestedMatchesSchema = new Schema({
    dogId: {
        type: Schema.Types.ObjectId,
        ref: "dogs",
    },
    requestedMatches: [{
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

const RequestedMatches = mongoose.model("requestedMatches", RequestedMatchesSchema);
module.exports = RequestedMatches;
