import {
    getPendingMatches,
    addPendingMatches,
    removePendingMatches,
} from "../../util/matches/pending_matches_api_util";

export const RECEIVE_PENDING_MATCHES = "RECEIVE_PENDING_MATCHES";

export const receivePendingMatches = (pendingMatches) => ({
  type: RECEIVE_PENDING_MATCHES,
  pendingMatches,
});

export const fetchPendingMatches = (dogId) => (dispatch) =>
  getPendingMatches(dogId)
    .then((pendingMatches) =>
      dispatch(receivePendingMatches(pendingMatches))
    )
    .catch((err) => console.log(err));

export const increasePendingMatches = (dogId, newDogId) => (dispatch) =>
  addPendingMatches(dogId, newDogId)
    .then((pendingMatches) =>
      dispatch(receivePendingMatches(pendingMatches))
    )
    .catch((err) => console.log(err));

export const decreasePendingMatches = (dogId, removedDogId) => (dispatch) =>
  removePendingMatches(dogId, removedDogId)
    .then((pendingMatches) =>
      dispatch(receivePendingMatches(pendingMatches))
    )
    .catch((err) => console.log(err));
