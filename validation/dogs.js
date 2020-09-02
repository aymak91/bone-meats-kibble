const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateDogInput(data) {
  let errors = {};

  data.name = validText(data.name) ? data.name : "";
  data.description = validText(data.description) ? data.description : "";
  data.breed = validText(data.breed) ? data.breed : "";
  data.size = validText(data.size) ? data.size : "";
  data.gender = validText(data.gender) ? data.gender : "";
  data.activeness = validText(data.activeness) ? data.activeness : "";
  data.personality = validText(data.personality) ? data.personality : "";

  //name
  if (!Validator.isLength(data.name, { min: 1, max: 140 })) {
    errors.name = "name must be between 1 and 140 characters";
  }

  if (Validator.isEmpty(data.name)) {
    errors.name = "name field is required";
  }

  //description
  if (!Validator.isLength(data.description, { min: 5, max: 140 })) {
    errors.description = "description must be between 5 and 140 characters";
  }

  if (Validator.isEmpty(data.description)) {
    errors.description = "description field is required";
  }

  //breed
  if (!Validator.isLength(data.breed, { min: 3, max: 140 })) {
    errors.breed = "Breed must be between 3 and 140 characters";
  }

  if (Validator.isEmpty(data.breed)) {
    errors.breed = "Breed field is required";
  }

  //birthDate
  if (!Validator.isDate(data.birthDate)) {
    errors.birthDate = "Must be a valid date";
  }

  if (Validator.isEmpty(data.birthDate)) {
    errors.birthDate = "Birth date field is required";
  }

  //size
  if (!Validator.isLength(data.size, { min: 4, max: 140 })) {
    errors.size = "Size must be between 4 and 140 characters";
  }

  if (Validator.isEmpty(data.size)) {
    errors.size = "Size field is required";
  }

  //gender
  if (!Validator.isLength(data.gender, { min: 3, max: 140 })) {
    errors.gender = "Gender must be between 3 and 140 characters";
  }

  if (Validator.isEmpty(data.gender)) {
    errors.gender = "Gender field is required";
  }

  // activeness
  if (!Validator.isLength(data.activeness, { min: 3, max: 140 })) {
    errors.activeness = "Activeness must be between 3 and 140 characters";
  }

  if (Validator.isEmpty(data.activeness)) {
    errors.activeness = "Activeness field is required";
  }

  //personality
  if (!Validator.isLength(data.personality, { min: 3, max: 140 })) {
    errors.personality = "Personality must be between 3 and 140 characters";
  }

  if (Validator.isEmpty(data.personality)) {
    errors.personality = "Personality field is required";
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0,
  };
};