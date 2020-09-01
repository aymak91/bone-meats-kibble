const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const Dog = require('../../models/Dog');
const validateDogInput = require('../../validation/dogs');


router.get("/test", (req, res) => {
  res.json({ msg: "This is the dogs route" })
});

router.get('/', (req, res) => {
    Dog.find()
        // .sort({ date: -1 })
        .then(dogs => res.json(dogs))
        .catch(err => res.status(404).json({ notweetsfound: 'No dogs found' }));
});

router.get('/user/:user_id', (req, res) => {
    Dog.find({user: req.params.user_id})
        .sort({ date: -1 })
        .then(dogs => res.json(dogs))
        .catch(err =>
            res.status(404).json({ nodogsfound: 'No dogs found from that user' }));
});

router.get('/:id', (req, res) => {
    Dog.findById(req.params.id)
        .then(dog => res.json(dog))
        .catch(err =>
            res.status(404).json({ nodogfound: 'No dog found with that ID' }));
});

router.post('/',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
      const { errors, isValid } = validateDogInput(req.body);
        
      if (!isValid) {
        return res.status(400).json(errors);
      }
  
      const newDog = new Dog({
        user: req.user.id,
        name: req.body.name,
        description: req.body.description,
        breed: req.body.breed,
        birthDate: req.body.birthDate,
        size: req.body.size,
        gender: req.body.gender,
        activeness: req.body.activeness,
        personality: req.body.personality
      });
  
      newDog
        .save()
        .then(dog => res.json(dog));
    }
);

router.patch(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { 
      name,
      description,
      breed,
      birthDate,
      size,
      gender,
      activeness,
      personality
    } = req.body;
    
    const user = req.user.id;

    Dog.findById(req.params.id).then((dog) => {
      dog.user = user;
      dog.name = name;
      dog.description = description;
      dog.breed = breed;
      dog.birthDate = birthDate;
      dog.size = size;
      dog.gender = gender;
      dog.activeness = activeness;
      dog.personality = personality;

      dog
        .save()
        .then((savedDog) => res.json(savedDog))
        .catch((err) => res.json(err));
    });
    return res;
  }
);

router.delete(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res, next) => {
    Dog.findByIdAndRemove(
      req.params.id, 
      function (err, dog) {
        if (err) return next(err);
        res.json(dog);
      }
    );
  }
);

module.exports = router;

