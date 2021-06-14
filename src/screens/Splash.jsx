import React, { useEffect } from "react";
import styled from "styled-components";

import { useDispatch } from "../contexts/AppContext";
import { getBackgroundResources } from "../actions/apiActions";

import { Cover, Overlay } from "../components";

import splashbg from "../assets/img/splash.png";
import logo from "../assets/img/logo.svg";

const Logo = styled.div`
  width: 20rem;
  height: 7.5rem;
  background: url(${logo});
  z-index: 10;
  background-size: cover;
  margin-bottom: 2rem;
`;

const Splash = ({ history }) => {

  const dispatch = useDispatch();

  useEffect(() => {
    getBackgroundResources().then(action => dispatch(action));
    // setTimeout(() => {
    //   history.push("/auth");
    // }, 3000);
  }, []);

  return(
    <Cover bg={splashbg}>
      <Overlay>
        <Logo onClick={() => history?.push("/auth")} />
      </Overlay>
    </Cover>
  );
};

export default Splash;