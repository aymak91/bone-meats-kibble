import {
    getMatches,
    addMatches,
    removeMatches,
} from "../../util/matches/matches_api_util";

export const RECEIVE_MATCHES = "RECEIVE_MATCHES";

export const receiveMatches = (matches) => ({
    type: RECEIVE_MATCHES,
    matches,
});

export const fetchMatches = (dogId) => (dispatch) =>
    getMatches(dogId)
        .then((matches) =>
            dispatch(receiveMatches(matches))
        )
        .catch((err) => console.log(err));

export const increaseMatches = (dogId, newDogId) => (dispatch) =>
    addMatches(dogId, newDogId)
        .then((matches) =>
            dispatch(receiveMatches(matches))
        )
        .catch((err) => console.log(err));

export const decreaseMatches = (dogId, removedDogId) => (dispatch) =>
    removeMatches(dogId, removedDogId)
        .then((matches) =>
            dispatch(receiveMatches(matches))
        )
        .catch((err) => console.log(err));
