import { combineReducers } from "redux";

import SessionErrorsReducer from "./session_errors_reducer";
import DogErrorsReducer from "./dog_errors_reducer"

export default combineReducers({
  session: SessionErrorsReducer,
  dogErrors: DogErrorsReducer
});
