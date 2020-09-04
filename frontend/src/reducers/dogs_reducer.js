import {
  RECEIVE_CURRENT_DOG,
  RECEIVE_DOGS,
  RECEIVE_USER_DOGS,
  RECEIVE_NEW_DOG,
  REMOVE_DOG
} from "../actions/dog_actions";

const DogsReducer = (
  state = { all: {}, user: {}, new: undefined, currentDog: {}},
  action
) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_CURRENT_DOG:
      newState.currentDog = action.dog.data;
      return newState;
    case RECEIVE_DOGS:
      newState.all = action.dogs.data;
      return newState;
    case RECEIVE_USER_DOGS:
      newState.user = action.dogs.data;
      return newState;
    case RECEIVE_NEW_DOG:
      newState.new = action.dog.data;
      return newState;
    case REMOVE_DOG:
        delete newState[action.dogId];
        return newState;
    default:
      return state;
  }
};

export default DogsReducer;
