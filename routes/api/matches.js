const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");

const MatchModel = require("../../models/Match");
const DogModel = require("../../models/Dog");
const Dog = require("../../models/Dog");


router.get("/", (req, res) => {
  MatchModel
    .find()
    .then((matches) => res.json(matches))
    .catch((err) =>
      res.status(404).json({ nomatchesfound: "No matches found" })
    );
});

router.get("/dog/:dog_id", (req, res) => {
  MatchModel
    .find({ dog: req.params.dog_id })
    .sort({ date: -1 })
    .then((matches) => res.json(matches))
    .catch((err) =>
      res.status(404).json({ nomatchesfound: "No matches found from that dog" })
    );
});

router.get("/:id", (req, res) => {
  MatchModel
    .findById(req.params.id)
    .populate({
        path: 'dog',
        select: 'name'
    })
    .populate({
        path: 'requestedDog',
        select: 'name'
    })
    .then((match) => res.json(match))
    .catch((err) =>
      res.status(404).json({ nomatchfound: "No match found with that ID" })
    );
});

router.post("/", (req, res) => {

    const newMatch = new MatchModel({
      dog: req.body.dog,
      requestedDog: req.body.requestedDog,
      isMatched: req.body.isMatched,
    });

    //need to restrict matches from being created for the dogs of the same owner

    newMatch
        .save()
        .then(function (result) {
            return DogModel.findOneAndUpdate(
                {_id: req.body.dog},
                {$push: {possibleMatches: result.id}}
            )
        })
        .then((match) => res.json(match));

  }
);

router.patch("/:id", (req, res) => {
    const {
      dog,
      requestedDog,
      isMatched,
    } = req.body;

    Match.findById(req.params.id).then((match) => {
      match.dog = dog;
      match.requestedDog = requestedDog;
      match.isMatched = isMatched;

      match
        .save()
        .then((savedMatch) => res.json(savedMatch))
        .catch((err) => res.json(err));
    });
    return res;
  }
);

router.delete("/:id", (req, res, next) => {
    Match.findByIdAndRemove(req.params.id, function (err, match) {
      if (err) return next(err);
      res.json(match);
    });
  }
);



module.exports = router;
