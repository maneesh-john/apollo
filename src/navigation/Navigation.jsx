import React from "react";
import { BrowserRouter, Route, Switch, useLocation } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import Splashscreen from "../screens/Splash";
import AuthScreen from "../screens/Auth";
import VerifyScreen from "../screens/VerifyAuth";
import Playlists from "../screens/Playlists";

const Routes = () => {

  const location = useLocation();

  return(
    <TransitionGroup>
      <CSSTransition
        key={location.key}
        timeout={300}
        classNames="fade"
      >
        <Switch location={location}>
          <Route
            exact
            path="/"
            component={Splashscreen}
          />
          <Route
            exact
            path="/auth"
            component={AuthScreen}
          />
          <Route
            exact
            path="/verify"
            component={VerifyScreen}
          />
          <Route
            exact
            path="/playlists"
            component={Playlists}
          />
        </Switch>
      </CSSTransition>
    </TransitionGroup>
  );
}

const Navigation = () => {

  return(
    <>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </>
  );
};

export default Navigation;