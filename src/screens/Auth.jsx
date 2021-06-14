import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { useDispatch, useStore } from "../contexts/AppContext";
import { getBackgroundResources } from "../actions/apiActions";

import { Cover, Overlay, Input } from "../components";
import logo from "../assets/img/logo.svg";
import splashbg from "../assets/img/splash.png";

const Logo = styled.div`
  width: 10rem;
  height: 3.75rem;
  background: url(${logo});
  z-index: 10;
  background-size: cover;
  margin-bottom: 2rem;
`;

const Auth = ({ history }) => {

  const state = useStore();
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");

  useEffect(() => {
    getBackgroundResources().then(action => dispatch(action));
  }, []);

  return(
    <Cover bg={splashbg}>
      <Overlay>
        <div style={{
          display: 'flex',
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "center",
          width: "100%",
          height: "100%"
        }}>
          <Logo />
          <div style={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}>
            <form onSubmit={(e) => {
              console.log("called")
              e.preventDefault();
              history?.push("/verify");
            }}>
              <Input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </form>
          </div>
        </div>
      </Overlay>
    </Cover>
  );
};

export default Auth;