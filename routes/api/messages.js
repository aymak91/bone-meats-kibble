const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");

const MessagesModel = require("../../models/Message");

router.get("/:sending_dog_id/:receiving_dog_id", async (req, res) => {

    const messages = await MessagesModel.find({
        $or: [
            { $and: [{ sendingDog: req.params.sending_dog_id }, { receivingDog: req.params.receiving_dog_id}]},
            { $and: [{ sendingDog: req.params.receiving_dog_id}, { receivingDog: req.params.sending_dog_id}]},
        ]
    })
    .sort({date: -1})
    .populate(
        {path: 'sendingDog', select: 'name'}
    )
    .populate(
        { path: 'receivingDog', select: 'name'}
    )
    
    res.json(messages)
});

//creates pending_matches document
router.post("/:sending_dog_id/:receiving_dog_id", async (req, res) => {

    const newMessage = await new MessagesModel({
        sendingDog: req.params.sending_dog_id,
        receivingDog: req.params.receiving_dog_id,
        body: req.body.body
    });

    const savedMessage = await newMessage.save()

    res.json(savedMessage);
});


module.exports = router;
