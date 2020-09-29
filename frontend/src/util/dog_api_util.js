import axios from "axios";

export const getDog = (dogId) => {
  return axios.get(`/api/dogs/${dogId}`);
};

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
  return axios.put(`/api/dogs/${dogId}`, data,
    {
      headers: {
        "Content-Type": `multipart/form-data`
      }
    }
  )
};

export const deleteDog = (dogId) => {
    return axios.delete(`/api/dogs/${dogId}`)
};