import { getDogs, getUserDogs, writeDog } from "../util/dog_api_util";

export const RECEIVE_DOGS = "RECEIVE_DOGS";
export const RECEIVE_USER_DOGS = "RECEIVE_USER_DOGS";
export const RECEIVE_DOG = "RECEIVE_DOG";
export const REMOVE_DOG = "REMOVE_DOG"

export const receiveDogs = (dogs) => ({
  type: RECEIVE_DOGS,
  dogs,
});

export const receiveUserDogs = (dogs) => ({
  type: RECEIVE_USER_DOGS,
  dogs,
});

export const receiveDog = (dog) => ({
  type: RECEIVE_DOG,
  dog,
});

export const removeDog = (dogId) => ({
  type: REMOVE_DOG,
  dogId,
});

export const fetchDogs = () => (dispatch) =>
  getDogs()
    .then((dogs) => dispatch(receiveDogs(dogs)))
    .catch((err) => console.log(err));

export const fetchUserDogs = (id) => (dispatch) =>
  getUserDogs(id)
    .then((dogs) => dispatch(receiveUserDogs(dogs)))
    .catch((err) => console.log(err));

export const createDog = (data) => (dispatch) =>
  writeDog(data)
    .then((data) => dispatch(receiveDog(data)))
    .catch((err) => console.log(err));

export const updateDog = (data, dogId) => (dispatch) =>
  updateDog(data, dogId)
    .then((data) => dispatch(receiveDog(data)))
    .catch((err) => console.log(err));

export const deleteDog = (dogId) => (dispatch) =>
  updateDog(dogId)
    .then(() => dispatch(removeDog(dogId)))
    .catch((err) => console.log(err));
