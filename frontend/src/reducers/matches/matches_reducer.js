import { RECEIVE_MATCHES } from "../../actions/match_actions/matches_actions";

const MatchesReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    switch (action.type) {
        case RECEIVE_MATCHES:
            return action.matches;
        default:
            return oldState;
    }
};

export default MatchesReducer;
