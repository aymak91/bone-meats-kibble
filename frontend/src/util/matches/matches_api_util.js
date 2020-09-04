import axios from "axios";

export const getMatches = (dogId) => {
  return axios.get(`/api/matches/${dogId}`);
};

export const addMatches = (dogId, newDogId) => {
  return axios.patch(`/api/matches/${dogId}/add/${newDogId}`);
};

export const removeMatches = (dogId, removedDogId) => {
  return axios.patch(`/api/matches/${dogId}/remove/${removedDogId}`);
};
