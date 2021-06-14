import React from "react";
import styled from "styled-components";

import { Cover, Overlay } from "../components";
import logo from "../assets/img/logo.svg";
import bg from "../assets/img/bg2.png";

const Logo = styled.div`
  width: 10rem;
  height: 3.75rem;
  background: url(${logo});
  z-index: 10;
  background-size: cover;
  margin-bottom: 2rem;
  margin-left: 2%;
`;

const Auth = ({ history }) => {

  return(
    <Cover bg={bg}>
      <Overlay>
        <div style={{
          display: 'flex',
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          width: "100%",
          height: "100%"
        }}>
          <Logo />
          <div style={{
            flex: 1,
            flexDirection: "column",
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "center",
            paddingLeft: "3%"
          }}>
          </div>
          <div style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            paddingLeft: "3%",
            marginBottom: "5%",
            width: "100%"
          }}>
            <p style={{
              color: "#fff",
              fontSize: "1.75rem",
              margin: 0,
              fontFamily: "M-Regular",
              marginLeft: "1rem"
            }}>
              Select a playlist or work to show here...
            </p>
            <p style={{
              color: "#fff",
              margin: 0,
              fontFamily: "M-Regular",
              marginRight: "6%",
            }}>
              <span style={{
                display: "block",
                fontSize: "1.25rem",
                fontStyle: "italic"
              }}>
                Artist name
              </span>
              <span style={{
                display: "block",
                fontSize: "1rem"
              }}>Title of art</span>
            </p>
          </div>
        </div>
      </Overlay>
    </Cover>
  );
};

export default Auth;