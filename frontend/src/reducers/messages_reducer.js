import { RECEIVE_MESSAGES } from "../actions/message_actions";

const MessagesReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let newState = Object.assign({}, oldState);
    switch (action.type) {
        case RECEIVE_MESSAGES:
            return action.messages;
        default:
            return oldState;
    }
};

export default MessagesReducer;
