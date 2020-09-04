import axios from "axios";

export const getPendingMatches = (dogId) => {
    return axios.get(`/api/pending_matches/${dogId}`);
};

export const makePendingMatches = (dogId) => {
    return axios.post(`/api/pending_matches/${dogId}`);
};

export const addPendingMatches = (dogId, newDogId) => {
    return axios.patch(`/api/pending_matches/${dogId}/add/${newDogId}`);
};

export const removePendingMatches = (dogId, removedDogId) => {
    return axios.patch(`/api/pending_matches/${dogId}/remove/${removedDogId}`);
};