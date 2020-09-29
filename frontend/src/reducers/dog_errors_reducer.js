import {
    RECEIVE_DOG_ERRORS, RECEIVE_NEW_DOG
} from "../actions/dog_actions"

const _nullErrors = []

const DogErrorsReducer = (state = _nullErrors, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_DOG_ERRORS:
            return action.errors;
        case RECEIVE_NEW_DOG:
            return _nullErrors;
        default:
            return state;
    }
}

export default DogErrorsReducer; 