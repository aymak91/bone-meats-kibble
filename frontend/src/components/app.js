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

const App = () => (
  <div>
    <NavBarContainer />
    <Switch>
      <AuthRoute exact path="/" component={MainPage} />
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />

      <ProtectedRoute exact path="/dogs" component={DogsContainer} />
      <ProtectedRoute exact path="/profile" component={ProfileContainer} />
      <ProtectedRoute exact path="/new_dog"component={DogCreateContainer}/>
    </Switch>
  </div>
);

export default App;
