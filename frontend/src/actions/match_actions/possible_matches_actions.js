import {
  getPossibleMatches,
  makePossibleMatches,
  addPossibleMatches,
  removePossibleMatches,
  curvePossibleMatches,
  curvePossibleMatches2
} from "../../util/matches/possible_matches_api_util";

export const RECEIVE_POSSIBLE_MATCHES = "RECEIVE_POSSIBLE_MATCHES";


export const receivePossibleMatches = (possibleMatches) => ({
    type: RECEIVE_POSSIBLE_MATCHES,
    possibleMatches
})

export const fetchPossibleMatches = (dogId) => (dispatch) => 
    getPossibleMatches(dogId)
        .then((possibleMatches) => dispatch(receivePossibleMatches(possibleMatches)))
        .catch((err) => console.log(err))

export const createPossibleMatches = (dogId) => (dispatch) => 
    makePossibleMatches(dogId)
        .then((possibleMatches) => dispatch(receivePossibleMatches(possibleMatches)))
        .catch((err) => console.log(err))

export const increasePossibleMatches = (dogId, newDogId) => (dispatch) => 
    addPossibleMatches(dogId, newDogId)
        .then((possibleMatches) => dispatch(receivePossibleMatches(possibleMatches)))
        .catch((err) => console.log(err))

export const decreasePossibleMatches = (dogId, rejectedDogId) => (dispatch) => 
    curvePossibleMatches(dogId, rejectedDogId)
        .then((possibleMatches) => dispatch(receivePossibleMatches(possibleMatches)))
        .catch((err) => console.log(err))
