import React from "react";
import styled from "styled-components";

import openIcon from "../../img/SelectOpenIcon.svg";

const SelectField = ({ placeholder, options }) => (
  <Wrapper>
    <Select placeholder={placeholder}>
      {options?.map((option) => (
        <option>{option}</option>
      ))}
    </Select>
  </Wrapper>
);

export default SelectField;

const Wrapper = styled.div`
  position: relative;
  &:after {
    content: "";
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    right: 24px;
    top: calc(50% - 6px);
    width: 12px;
    height: 12px;
    background-image: ${`url(${openIcon})`};
    background-position: center;
    background-repeat: no-repeat;
  }
`;

const Select = styled.select`
  background: #ffffff;
  border: 1px solid #cad6de;
  box-sizing: border-box;
  border-radius: 48px;
  height: 56px;
  width: 100%;
  padding: 20px 24px;
  outline: none;
  font-size: 14px;
  line-height: 16px;
  color: #000000;
  appearance: none;
  &::placeholder {
    font-size: 14px;
    line-height: 16px;
    color: #cad6de;
  }
`;
