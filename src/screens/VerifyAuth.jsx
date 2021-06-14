import React from "react";
import styled from "styled-components";

import { useDispatch, useStore } from "../contexts/AppContext";

import { Cover, Overlay, Carousel } from "../components";
import logo from "../assets/img/logo.svg";
import bg from "../assets/img/bg2.png";
import qr from "../assets/img/qr.png";

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

  const state = useStore();

  return(
    <Cover bg={bg}>
      <Carousel slides={state.resources}>
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
            <h6 style={{
              color: "#fff",
              fontSize: "1.5rem",
              margin: 0,
              marginBottom: ".75rem"
            }}>
              1. Login to your mobile app
            </h6>
            <h6 style={{
              color: "#fff",
              fontSize: "1.5rem",
              margin: 0,
              marginBottom: ".75rem"
            }}>
              2. Enter the following code
            </h6>
            <h6 style={{
              color: "#34E4EA",
              fontSize: "2rem",
              margin: 0,
              marginBottom: ".75rem",
              letterSpacing: "1.5rem",
              fontFamily: "M-Semi"
            }}>
              334-345
            </h6>
          </div>
          <div style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "center",
            paddingLeft: "3%",
            marginBottom: "5%"
          }}>
            <div style={{
              background: "#fff",
              padding: ".25rem"
            }}>
              <img
                src={qr}
              />
            </div>
            <p style={{
              color: "#fff",
              fontSize: "1rem",
              margin: 0,
              fontFamily: "M-Regular",
              marginLeft: "1rem"
            }}
              onClick={() => history?.push("/playlists")}
            >
              Scan & download<br /> Apollo mobile app
            </p>
          </div>
        </div>
      </Overlay>
      </Carousel>
    </Cover>
  );
};

export default Auth;