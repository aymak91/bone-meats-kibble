import { RECEIVE_POSSIBLE_MATCHES } from "../../actions/match_actions/possible_matches_actions";

const PossibleMatchesReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState = Object.assign({}, oldState);
  switch (action.type) {
    case RECEIVE_POSSIBLE_MATCHES:
      return action.possibleMatches;
    default:
      return oldState;
  }
};

export default PossibleMatchesReducer;
