import React from "react";
import styled from "styled-components";

const TextInput = styled.input`
  border: none;
  background: transparent;
  border-bottom: 1px solid #34E4EA;
  outline: none;
  color: #fff;
  width: 30vw;
  text-align: center;
  padding: .5rem;
  font-size: 2rem;
  font-family: M-Regular;
`;

export default function Input({
  value,
  onChange
}){
  return(
    <TextInput
      onChange={onChange}
      value={value}
    />
  );
};