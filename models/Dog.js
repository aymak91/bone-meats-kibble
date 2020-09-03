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
    required: false,
    default: "https://bonemeatskibble-pro.s3.amazonaws.com/a130c200-4967-453a-89c1-d9b87d4818e1"
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: null,
  },
});

const Dog = mongoose.model('dogs', DogSchema);
module.exports = Dog;

