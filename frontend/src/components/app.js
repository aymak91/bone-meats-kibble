import React from "react";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import { Switch } from "react-router-dom";
import NavBarContainer from "./nav/navbar_container";

import DogsContainer from './dogs/dogs_container';
import DogCreateContainer from './dogs/dog_create_container';
import ProfileContainer from './profile/profile_container';
import MainPage from "./main/main_page";
import LoginFormContainer from "./session/login_form_container";
import SignupFormContainer from "./session/signup_form_container";
import PossibleMatchesContainer from "./matches/possible_matches_container";
import PendingMatchesContainer from "./matches/pending_matches_container";
import MatchesContainer from "./matches/matches_container";
import MessagesContainer from "./messages/messages_container"
import SearchIndexContainer from "./search/search_index_container"
// import ParkMap from "./maps/maps"


const App = () => (
  <div className="test">
    <NavBarContainer />
    <Switch>
      <AuthRoute exact path="/" component={MainPage} />
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />

      <ProtectedRoute exact path="/dogs" component={DogsContainer} />
      <ProtectedRoute exact path="/profile" component={ProfileContainer} />
      <ProtectedRoute exact path="/new_dog"component={DogCreateContainer}/>
      <ProtectedRoute exact path="/:dog_id/possible_matches/" component={PossibleMatchesContainer}/>
      <ProtectedRoute exact path="/:dog_id/pending_matches/" component={PendingMatchesContainer}/>
      <ProtectedRoute exact path="/:dog_id/matches/" component={MatchesContainer}/>
      <ProtectedRoute exact path="/messages/:sending_dog_id/:receiving_dog_id/" component={MessagesContainer}/>
      <ProtectedRoute exact path="/search" component={SearchIndexContainer} />
    </Switch>
    {/* <ParkMap /> */}
  </div>
);

export default App;
