const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");

const MatchesModel = require("../../../models/matches/Matches");

router.get("/:dog_id", (req, res, next) => {
  MatchesModel
    .find({ dogId: req.params.dog_id })
    .populate({         //populates dog name to dog ID, just for testing purposes
      path: 'dogId',
      select: 'name'
    })
    .populate({        
      path: 'matches',
    })
    // .find({ dogId: req.params.dog_id }, 'matches') //return just array
    .then((matches) => res.json(matches))
    .catch((err) =>
      res.status(404).json({ nomatchesfound: "No matches found from that dog" })
    );
});

//creates matches document
router.post("/:dog_id", (req, res) => {

  const newMatches = new MatchesModel({
    dogId: req.params.dog_id,
    matches: []
  });

  newMatches
    .save()
    .then(matches => res.json(matches));
});


//add new dog_id to the matches array
router.patch("/:dog_id/add/:new_dog_id", (req, res) => {

  MatchesModel.findOneAndUpdate(
    { dogId: req.params.dog_id },
    { $push: { 'matches': req.params.new_dog_id } },
    { new: true, useFindAndModify: false }
  ).then(matches => res.json(matches))

});

//remove dog from matches array
router.patch("/:dog_id/remove/:removed_dog_id", (req, res) => {

  MatchesModel.findOneAndUpdate(
    { dogId: req.params.dog_id },
    { $pull: { 'matches': req.params.removed_dog_id } },
    { new: true, useFindAndModify: false }
  ).then(matches => res.json(matches));
});


module.exports = router;
