import { RECEIVE_PENDING_MATCHES } from "../../actions/match_actions/pending_matches_actions";

const PendingMatchesReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let newState = Object.assign({}, oldState);
    switch (action.type) {
        case RECEIVE_PENDING_MATCHES:
            return action.pendingMatches;
        default:
            return oldState;
    }
};

export default PendingMatchesReducer;
