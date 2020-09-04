const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MessageSchema = new Schema({
    sendingDog: {
        type: Schema.Types.ObjectId,
        ref: "dogs",
    },
    receivingDog: {
        type: Schema.Types.ObjectId,
        ref: "dogs",
    },
    body: {
        type: String,
        required: true,
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

const Message = mongoose.model('message', MessageSchema);
module.exports = Message;

