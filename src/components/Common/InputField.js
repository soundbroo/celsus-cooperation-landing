import React from "react";
import styled from "styled-components";

const InputField = ({ placeholder }) => (
  <Wrapper>
    <Input type="text" placeholder={placeholder} />
  </Wrapper>
);

export default InputField;

const Wrapper = styled.div``;

const Input = styled.input`
  background: #ffffff;
  border: 1px solid #cad6de;
  box-sizing: border-box;
  border-radius: 48px;
  height: 56px;
  padding: 20px 24px;
  outline: none;
  width: 100%;
  font-size: 14px;
  line-height: 16px;
  color: #000000;
  &::placeholder {
    font-size: 14px;
    line-height: 16px;
    color: #cad6de;
  }
`;
