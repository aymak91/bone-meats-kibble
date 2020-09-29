const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');
const AWS = require('aws-sdk');
const keys = require('../../config/keys');
const uuidv4 = require("uuid").v4;

const Dog = require('../../models/Dog');
const validateDogInput = require('../../validation/dogs');

//MATCHES MODELS
const PossibleMatchesModel = require("../../models/matches/PossibleMatches");
const PendingMatchesModel = require("../../models/matches/PendingMatches");
const RequestedMatchesModel = require("../../models/matches/RequestedMatches");
const MatchesModel = require("../../models/matches/Matches");

// These are for Middleware for Postman Form-Data
const multer = require("multer")
const upload = multer();


// AWS S3 Setup which allows you access to AWS
const s3 = new AWS.S3({
  accessKeyId: keys.awsAccessID,
  secretAccessKey: keys.awsSecretAccessKey,
});

const uploadImage = (file) => {
  const params = {
    Bucket: keys.s3Bucket,
    Key: uuidv4(),
    Body: file.buffer,
    ContentType: file.mimetype,
    ACL: "public-read"
  };

  const uploadPhoto = s3.upload(params).promise();

  return uploadPhoto;
};

router.get("/test", (req, res) => {
  res.json({ msg: "This is the dogs route" })
});

router.get('/', (req, res) => {
  Dog.find()
    // .sort({ date: -1 })
    .then(dogs => res.json(dogs))
    .catch(err => res.status(404).json({ nodogsfound: 'No dogs found' }));
});

router.get('/user/:user_id', (req, res) => {
  Dog.find({ user: req.params.user_id })
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


//post takes in a second argument here which is upload.single("file"). file is the name of the field that is going to be uploaded

router.post('/', upload.single("file"), //middleware
  passport.authenticate('jwt', { session: false }),
  async (req, res) => {
    const { errors, isValid } = validateDogInput(req.body);

    if (!isValid) {
      return res.status(400).json(errors);
    }

    // Waits for file to upload, get URL, and then creates a Dog object
    console.log(req.file)

    const data = await uploadImage(req.file)             //file comes from upload.single("file")
    const uploadedFileURL = data.Location;             //data.Location is url of aws image

    const newDog = new Dog({
      user: req.user.id,
      name: req.body.name,
      description: req.body.description,
      breed: req.body.breed,
      birthDate: req.body.birthDate,
      size: req.body.size,
      gender: req.body.gender,
      activeness: req.body.activeness,
      personality: req.body.personality,
      imageURL: uploadedFileURL
    });

    const savedDog = await newDog.save()

    const allDogs = await Dog.find().lean().exec();
    const allDogIds = allDogs.map(pojo => pojo._id);

    //CREATE POSSIBLE MATCHES ARRAY
    const newPossibleMatches = new PossibleMatchesModel({
      dogId: savedDog._id,
      possibleMatches: allDogIds,
      rejectedMatches: [],
    });

    newPossibleMatches.save()

    //CREATE PENDING MATCHES ARRAY
    const newPendingMatches = new PendingMatchesModel({
      dogId: savedDog._id,
      pendingMatches: [],
    });

    newPendingMatches.save()

    //CREATE REQUESTED MATCHES ARRAY
    const newRequestedMatches = new RequestedMatchesModel({
      dogId: savedDog._id,
      requestedMatches: [],
    });

    newRequestedMatches.save()

    //CREATE MATCHES ARRAY
    const newMatches = new MatchesModel({
      dogId: savedDog._id,
      matches: [],
    });

    newMatches.save()

    // res.json(savedDog)
    savedDog.save()
      .then(dog => res.json(dog))
      .catch(err => res.status(400).json(err))
  }
);

// router.post('/', upload.single("file"), //middleware
//   passport.authenticate('jwt', { session: false }),
//   (req, res) => {
//     const { errors, isValid } = validateDogInput(req.body);

//     if (!isValid) {
//       return res.status(400).json(errors);
//     }

//     // Waits for file to upload, get URL, and then creates a Dog object
//     console.log(req.file)

//     uploadImage(req.file).then(data => {                                   //file comes from upload.single("file")
//       const uploadedFileURL = data.Location;                                    //data.Location is url of aws image

//       const newDog = new Dog({
//         user: req.user.id,
//         name: req.body.name,
//         description: req.body.description,
//         breed: req.body.breed,
//         birthDate: req.body.birthDate,
//         size: req.body.size,
//         gender: req.body.gender,
//         activeness: req.body.activeness,
//         personality: req.body.personality,
//         imageURL: uploadedFileURL
//       });

//       newDog
//         .save()
//         .then(dog => res.json(dog));
//     });
//   }
// );

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

//backend route to also edit photo of dog. However, this currently breaks the frontend so this is edited out for now.
router.put(
  "/:id", upload.single("file"),
  passport.authenticate("jwt", { session: false }),
  (req, res) => {

    const { errors, isValid } = validateDogInput(req.body);

    if (!isValid) {
      return res.status(400).json(errors);
    }

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
    if (req.file === undefined) {
      Dog.findOne(req.params._id)
        .then((dog) => {
          dog.user = user;
          dog.name = name;
          dog.description = description;
          dog.breed = breed;
          dog.birthDate = birthDate;
          dog.size = size;
          dog.gender = gender;
          dog.activeness = activeness;
          dog.personality = personality;
          dog.imageURL = req.body.file;
          dog
            .save()
            .then((savedDog) => res.json(savedDog))
            .catch((err) => res.json(err));
        })
    } else {
      uploadImage(req.file)
        .then((data) => {
          const uploadedFileURL = data.Location;

          Dog.findOne(req.params._id)
            .then((dog) => {
              dog.user = user;
              dog.name = name;
              dog.description = description;
              dog.breed = breed;
              dog.birthDate = birthDate;
              dog.size = size;
              dog.gender = gender;
              dog.activeness = activeness;
              dog.personality = personality;
              dog.imageURL = uploadedFileURL;
              dog
                .save()
                .then((savedDog) => res.json(savedDog))
                .catch((err) => res.json(err));
            })
            .catch((err) => res.status(400).json(err));
        })
        .catch((err) => res.status(400).json(err));
    }

    // uploadImage(req.file)
    //   .then((data) => {
    //     const uploadedFileURL = data.Location;

    //     Dog.findOne(req.params._id)
    //       .then((dog) => {
    //         dog.user = user;
    //         dog.name = name;
    //         dog.description = description;
    //         dog.breed = breed;
    //         dog.birthDate = birthDate;
    //         dog.size = size;
    //         dog.gender = gender;
    //         dog.activeness = activeness;
    //         dog.personality = personality;
    //         dog.imageURL = uploadedFileURL;
    //         dog
    //           .save()
    //           .then((savedDog) => res.json(savedDog))
    //           .catch((err) => res.json(err));
    //       })
    //       .catch((err) => res.status(400).json(err));
    //   })
    //   .catch((err) => res.status(400).json(err));
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