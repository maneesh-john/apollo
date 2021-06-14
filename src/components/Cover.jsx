import React from "react";
import styled from "styled-components";

const Cover = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const Image = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
`;

export default function CoverBg({ children, bg }){

  return(
    <Cover>
      <Image src={bg} />
      {children}
    </Cover>
  );
};