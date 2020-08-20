import React from "react";
import styled from "styled-components";

const SelectField = ({ placeholder, options }) => (
  <Select placeholder={placeholder}>
    {options?.map((option) => (
      <option>{option}</option>
    ))}
  </Select>
);

export default SelectField;

const Select = styled.select`
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
