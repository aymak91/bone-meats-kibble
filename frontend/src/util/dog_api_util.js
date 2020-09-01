import axios from "axios";

export const getDogs = () => {
  return axios.get("/api/dogs");
};

export const getUserDogs = (id) => {
  return axios.get(`/api/dogs/user/${id}`);
};

export const writeDog = (data) => {
  return axios.post("/api/dogs/", data);
};

export const updateDog = (data, dogId) => {
    return axios.patch(`/api/dogs/${dogId}`, data)
};

export const deleteDog = (dogId) => {
    return axios.patch(`/api/dogs/${dogId}`)
};