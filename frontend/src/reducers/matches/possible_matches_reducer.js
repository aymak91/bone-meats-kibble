import { RECEIVE_POSSIBLE_MATCHES } from "../../actions/match_actions/possible_matches_actions";

const PossibleMatchesReducer = (
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

export default PossibleMatchesReducer;
