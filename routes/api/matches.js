const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");

const Match = require("../../models/Match");
const Dog = require("../../models/Dog");



router.get("/", (req, res) => {
  Match
    .find()
    .then((matches) => res.json(matches))
    .catch((err) => res.status(404).json({ nomatchesfound: "No matches found" }));
});

router.get("/dog/:dog_id", (req, res) => {
  Match
    .find({ dog: req.params.dog_id })
    .sort({ date: -1 })
    .then((matches) => res.json(matches))
    .catch((err) =>
      res.status(404).json({ nomatchesfound: "No matches found from that dog" })
    );
});

router.get("/:id", (req, res) => {
  Match.findById(req.params.id)
    .then((match) => res.json(match))
    .catch((err) =>
      res.status(404).json({ nomatchfound: "No match found with that ID" })
    );
});

router.post("/", (req, res) => {

    const newMatch = new Match({
      dog: req.body.dog,
      requestedDog: req.body.requestedDog,
      isMatched: req.body.isMatched,
    });

    // console.log(newMatch.dog)
    // console.log(newMatch.requestedDog)

    // dog = Dog.findOne(newMatch.dog);

    // console.log(dog);
    // console.log(requestedDog.user);

    newMatch.save().then((match) => res.json(match));

    // if (dog.user !== requestedDog.user)  {
    //     newMatch.save().then((match) => res.json(match));
    // } else {
    //     res.status(404).json( {matchnotcreated: "cannot match two dogs of the same owner"})
    // }

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
