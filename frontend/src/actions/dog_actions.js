import { getDogs, getUserDogs, writeDog, updateDog, deleteDog } from "../util/dog_api_util";

export const RECEIVE_DOGS = "RECEIVE_DOGS";
export const RECEIVE_USER_DOGS = "RECEIVE_USER_DOGS";
export const RECEIVE_NEW_DOG = "RECEIVE_NEW_DOG";
export const REMOVE_DOG = "REMOVE_DOG";

export const receiveDogs = (dogs) => ({
  type: RECEIVE_DOGS,
  dogs,
});

export const receiveUserDogs = (dogs) => ({
  type: RECEIVE_USER_DOGS,
  dogs,
});

export const receiveNewDog = (dog) => ({
  type: RECEIVE_NEW_DOG,
  dog,
});

export const removeDog = (dogId) => ({
  type: REMOVE_DOG,
  dogId
})

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
    .then((dog) => dispatch(receiveNewDog(dog)))
    .catch((err) => console.log(err));

export const patchDog = (data, dogId) => (dispatch) =>
  updateDog(data, dogId)
    .then((data) => dispatch(receiveNewDog(data)))
    .catch((err) => console.log(err));

export const destroyDog = (dogId) => (dispatch) =>
  deleteDog(dogId)
    .then(() => dispatch(removeDog(dogId)))
    .catch((err) => console.log(err));
