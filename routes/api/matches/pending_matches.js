const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");

const PendingMatchesModel = require("../../../models/matches/PendingMatches");

router.get("/:dog_id", (req, res, next) => {
    PendingMatchesModel
        .find({ dogId: req.params.dog_id })
        .populate({         //populates dog name to dog ID, just for testing purposes
            path: 'dogId',
            select: 'name'
        })
        // .find({ dogId: req.params.dog_id }, 'matches') //return just array
        .then((pendingMatches) => res.json(pendingMatches))
        .catch((err) =>
            res.status(404).json({ nomatchesfound: "No pending matches found from that dog" })
        );
});

//creates matches document
router.post("/:dog_id", (req, res) => {

    const newPendingMatches = new PendingMatchesModel({
        dogId: req.params.dog_id,
        pendingMatches: []
    });

    newPendingMatches
        .save()
        .then(matches => res.json(matches));
});


//add new dog_id to the matches array
router.patch("/:dog_id/add/:new_dog_id", (req, res) => {

    PendingMatchesModel.findOneAndUpdate(
        { dogId: req.params.dog_id },
        { $push: { 'pendingMatches': req.params.new_dog_id } },
        { new: true, useFindAndModify: false }
    ).then(possibleMatch => res.json(possibleMatch))

});

//remove dog from matches array
router.patch("/:dog_id/remove/:removed_dog_id", (req, res) => {

    PendingMatchesModel.findOneAndUpdate(
        { dogId: req.params.dog_id },
        { $pull: { 'pendingMatches': req.params.removed_dog_id } },
        { new: true, useFindAndModify: false }
    ).then(matches => res.json(matches));
});


module.exports = router;
