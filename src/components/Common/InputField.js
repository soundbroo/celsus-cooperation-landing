import React from "react";
import styled from "styled-components";

const InputField = ({ placeholder }) => (
  <Input type="text" placeholder={placeholder} />
);

export default InputField;

const Input = styled.input`
  background: #ffffff;
  border: 1px solid #cad6de;
  box-sizing: border-box;
  border-radius: 48px;
  height: 56px;
  width: 208px;
  padding: 20px 24px;
  outline: none;
  font-size: 14px;
  line-height: 16px;
  color: #000000;
  &::placeholder {
    font-size: 14px;
    line-height: 16px;
    color: #cad6de;
  }
`;
