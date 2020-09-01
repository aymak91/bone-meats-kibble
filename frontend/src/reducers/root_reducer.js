import { combineReducers } from "redux";
import session from "./session_api_reducer.js";
import errors from "./errors_reducer";
import dogs from "./dogs_reducer";

const RootReducer = combineReducers({
  session,
  errors,
  dogs
});

export default RootReducer;
