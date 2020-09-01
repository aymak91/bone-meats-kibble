import {
  RECEIVE_DOGS,
  RECEIVE_USER_DOGS,
  RECEIVE_DOG,
  REMOVE_DOG
} from "../actions/dog_actions";

const DogsReducer = (
  state = { all: {}, user: {}, new: undefined },
  action
) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_DOGS:
      newState.all = action.dogs.data;
      return newState;
    case RECEIVE_USER_DOGS:
      newState.user = action.dogs.data;
      return newState;
    case RECEIVE_DOG:
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
