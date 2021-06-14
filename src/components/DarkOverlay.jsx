import React from "react";
import styled from "styled-components";

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,.4);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function DarkOverlay({ children }){
  return(
    <Overlay>
      {children}
    </Overlay>
  )
};