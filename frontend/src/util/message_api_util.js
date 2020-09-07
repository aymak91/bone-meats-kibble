import axios from "axios";

export const getMessages = (sendingDogId, receivingDogId) => {
    return axios.get(`/api/messages/${sendingDogId}/${receivingDogId}`);
};

export const postMessage = (sendingDogId, receivingDogId, message) => {
    return axios.post(`/api/messages/${sendingDogId}/${receivingDogId}`, message);
};

