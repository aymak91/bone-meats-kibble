const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");

const RequestedMatchesModel = require("../../../models/matches/RequestedMatches");

router.get("/:dog_id", (req, res, next) => {
    RequestedMatchesModel
        .find({ dogId: req.params.dog_id })
        .populate({         //populates dog name to dog ID, just for testing purposes
            path: 'dogId',
            select: 'name'
        })
        // .find({ dogId: req.params.dog_id }, 'matches') //return just array
        .then((requestedMatches) => res.json(requestedMatches))
        .catch((err) =>
            res.status(404).json({ nomatchesfound: "No pending matches found from that dog" })
        );
});

//creates matches document
router.post("/:dog_id", (req, res) => {

    const newRequestedMatches = new RequestedMatchesModel({
        dogId: req.params.dog_id,
        requestedMatches: []
    });

    newRequestedMatches
        .save()
        .then(matches => res.json(matches));
});


//add new dog_id to the matches array
router.patch("/:dog_id/add/:new_dog_id", (req, res) => {

    RequestedMatchesModel.findOneAndUpdate(
        { dogId: req.params.dog_id },
        { $push: { 'requestedMatches': req.params.new_dog_id } },
        { new: true, useFindAndModify: false }
    ).then(possibleMatch => res.json(possibleMatch))

});

//remove dog from matches array
router.patch("/:dog_id/remove/:removed_dog_id", (req, res) => {

    RequestedMatchesModel.findOneAndUpdate(
        { dogId: req.params.dog_id },
        { $pull: { 'requestedMatches': req.params.removed_dog_id } },
        { new: true, useFindAndModify: false }
    ).then(matches => res.json(matches));
});


module.exports = router;
