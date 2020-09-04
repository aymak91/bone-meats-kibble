const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");
// const mongo = require('mongodb').MongoClient;

const PossibleMatchesModel = require("../../../models/matches/PossibleMatches");
const DogModel = require("../../../models/Dog");
// const DogModel = require("../../../models/Dog");

router.get("/:dog_id", (req, res, next) => {
  PossibleMatchesModel
    .find({ dogId: req.params.dog_id })
    .populate({         //adds dog name to dog ID, just for testing
      path: 'dogId',
      select: 'name'
    })
    .populate({
      path: 'possibleMatches',
    })
    // .find({ dogId: req.params.dog_id }, 'possibleMatches') //return just array
    .then((possibleMatches) => res.json(possibleMatches))
    .catch((err) =>
      res.status(404).json({ nomatchesfound: "No possible matches found from that dog" })
    );
});

//creates possibleMatches document
router.post("/:dog_id", async (req, res) => {

  const allDogs = await DogModel.find().lean().exec();
  const allDogIds = allDogs.map(pojo => pojo._id);

  const newPossibleMatches = new PossibleMatchesModel({
    dogId: req.params.dog_id,
    possibleMatches: allDogIds,
  });

  res.json(await newPossibleMatches.save())
});


//add dog_id to the possible matches array
router.patch("/:dog_id/add/:new_dog_id", (req, res) => {

  return PossibleMatchesModel.findOneAndUpdate(
    { dogId: req.params.dog_id},
    {$push: {'possibleMatches': req.params.new_dog_id}},
    { new: true, useFindAndModify: false }
  ).then(possibleMatch => res.json(possibleMatch))

});

//remove dog_id to the possible matches array
router.patch("/:dog_id/remove/:removed_dog_id", (req, res) => {

  return PossibleMatchesModel.findOneAndUpdate(
    { dogId: req.params.dog_id},
    { $pull: {'possibleMatches': req.params.new_dog_id}},
    { new: true, useFindAndModify: false }
  ).then(possibleMatch => res.json(possibleMatch))

});

//add dog_id to rejected matches array
router.patch("/:dog_id/reject/:rejected_dog_id", (req, res) => {

  PossibleMatchesModel.findOneAndUpdate(
    { dogId: req.params.dog_id },
    { $push: { 'rejectedMatches': req.params.rejected_dog_id } },
    { new: true, useFindAndModify: false }
  ).then(possibleMatch => res.json(possibleMatch));
});

//remove dog from possibe matches array and move to rejectedmatches
router.patch("/:dog_id/move/:rejected_dog_id", (req, res) => {

  PossibleMatchesModel.findOneAndUpdate(
    { dogId: req.params.dog_id },
    { $pull: {'possibleMatches': req.params.rejected_dog_id}},
    { new: true, useFindAndModify: false }
  ).then(function (result) {
      return PossibleMatchesModel.findOneAndUpdate(
        { dogId: req.params.dog_id },
        { $push: { 'rejectedMatches': req.params.rejected_dog_id } },
        { new: true, useFindAndModify: false }
      )
  }).then(possibleMatch => res.json(possibleMatch));
});

module.exports = router;