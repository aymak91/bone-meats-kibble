import { combineReducers } from "redux";
import session from "./session_api_reducer.js";
import errors from "./errors_reducer";
import dogs from "./dogs_reducer";
import PossibleMatchesReducer from "./matches/possible_matches_reducer";
import PendingMatchesReducer from "./matches/pending_matches_reducer";
import MatchesReducer from "./matches/matches_reducer";
import MessagesReducer from "./messages_reducer";
import modal from "./modal_reducer";

const RootReducer = combineReducers({
  session,
  errors,
  dogs,
  possibleMatches: PossibleMatchesReducer,
  pendingMatches: PendingMatchesReducer,
  matches: MatchesReducer,
  messages: MessagesReducer,
  modal
});

export default RootReducer;
