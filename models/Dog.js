const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DogSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "users",
  },
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  breed: {
    type: String,
    required: true,
  },
  birthDate: {
    type: Date,
    required: true,
  },
  size: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  activeness: {
    type: String,
    required: true,
  },
  personality: {
    type: String,
    required: true,
  },
  imageURL: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: null,
  },
  //MATCH ALGORITHM
  possibleMatches: [{type: Schema.Types.ObjectId, ref: 'matches'}], //array of ALL MATCHES where matched = false
  matches: [], //array of dog_ids
  requestingMatches: [], //array of dog_ids who liked you
  requestedMatches: [], //array of dog_ids who you liked
});

const Dog = mongoose.model('dogs', DogSchema);
module.exports = Dog;