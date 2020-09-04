import {
    getMessages,
    postMessage,
} from "../util/message_api_util";

export const RECEIVE_MESSAGES = "RECEIVE_MESSAGES";

export const receiveMessages = (messages) => ({
    type: RECEIVE_MESSAGES,
    messages,
});


export const fetchMessages = (sendingDogId, receivingDogId) => (dispatch) =>
    getMessages(sendingDogId, receivingDogId)
        .then((messages) =>
            dispatch(receiveMessages(messages))
        )
        .catch((err) => console.log(err));

export const createMessage = (sendingDogId, receivingDogId, message) => (dispatch) =>
    postMessage(sendingDogId, receivingDogId, message)
        .then((message) =>
            dispatch(receiveMessages(message))
        )
        .catch((err) => console.log(err));

