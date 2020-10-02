import { getDog, getDogs, getUserDogs, writeDog, updateDog, deleteDog } from "../util/dog_api_util";

export const RECEIVE_CURRENT_DOG = "RECEIVE_CURRENT_DOG";
export const RECEIVE_RECEIVING_DOG = "RECEIVE_RECEIVING_DOG";
export const RECEIVE_DOGS = "RECEIVE_DOGS";
export const RECEIVE_USER_DOGS = "RECEIVE_USER_DOGS";
export const RECEIVE_NEW_DOG = "RECEIVE_NEW_DOG";
// export const RECEIVE_UPDATE_DOG = "RECEIVE_UPDATE_DOG";
export const REMOVE_DOG = "REMOVE_DOG";
export const RECEIVE_DOG_ERRORS = "RECEIVE_DOG_ERRORS"


export const receiveCurrentDog = (dog) => ({
  type: RECEIVE_CURRENT_DOG,
  dog,
});

export const receiveReceivingDog = (dog) => ({
  type: RECEIVE_RECEIVING_DOG,
  dog,
});

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

export const receiveDogErrors = (errors) => ({
  type: RECEIVE_DOG_ERRORS,
  errors
})

export const fetchCurrentDog = (dogId) => (dispatch) => 
  getDog(dogId)
    .then((dog) => dispatch(receiveCurrentDog(dog)))
    .catch((err) => console.log(err));

export const fetchReceivingDog = (dogId) => (dispatch) =>
  getDog(dogId)
    .then((dog) => dispatch(receiveReceivingDog(dog)))
    .catch((err) => console.log(err));

export const fetchDogs = () => (dispatch) =>
  getDogs()
    .then((dogs) => dispatch(receiveDogs(dogs)))
    .catch((err) => console.log(err));

export const fetchUserDogs = (id) => (dispatch) =>
  getUserDogs(id)
    .then((dogs) => dispatch(receiveUserDogs(dogs)))
    .catch((err) => console.log(err));

export const createDog = (data) => (dispatch) => {
  writeDog(data)
    .then((dog) => dispatch(receiveNewDog(dog)))
    .catch((err) => dispatch(receiveDogErrors(err.response.data)))
};

// Consider using axios directly instead of going through redux for dog edit. Do not need patchDog if so. See update_dog_form

// export const patchDog = (data, dogId) => (dispatch) =>
//   updateDog(data, dogId)
//     .then(dog => dispatch(receiveUpdateDog(dog)))
//     .catch((err) => console.log(err));

export const patchDog = (data, dogId) => (dispatch) =>
  updateDog(data, dogId)
    .then((data) => dispatch(receiveNewDog(data)))
    .catch((err) => console.log(err));

export const destroyDog = (dogId) => (dispatch) =>
  deleteDog(dogId)
    .then(() => dispatch(removeDog(dogId)))
    .catch((err) => console.log(err));
