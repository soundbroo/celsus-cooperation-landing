import React from "react";
import styled from "styled-components";

const Button = ({
  children,
  size,
  dark,
  white,
  outlined,
  fontColor,
  fontSize,
  grey,
  icon,
}) => (
  <Wrapper
    size={size}
    dark={dark}
    white={white}
    outlined={outlined}
    fontColor={fontColor}
    fontSize={fontSize}
    grey={grey}
    icon={icon}
  >
    {children}
    {icon || null}
  </Wrapper>
);

export default Button;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${({ size }) =>
    size === "small" ? "44px" : size === "large" ? "68px" : "56px"};
  background: ${({ dark, grey, outlined }) =>
    dark
      ? "#253C50"
      : grey
      ? "rgba(163, 188, 203, 0.2)"
      : outlined
      ? "none"
      : "#00B2FF"};
  color: ${({ fontColor }) => fontColor || "#fff"};
  border: ${({ outlined, white }) =>
    outlined && white
      ? "2px solid #fff"
      : outlined
      ? "2px solid #00B2FF"
      : "none"};
  font-size: ${({ fontSize }) => (fontSize === "small" ? "14px" : "16px")};
  line-height: ${({ fontSize }) => (fontSize === "small" ? "16px" : "20px")};
  border-radius: 78px;
  padding: ${({ icon }) => (icon ? "0 14px 0 28px" : "0 52px;")};
  cursor: pointer;
  > svg {
    margin-left: 16px;
    > path {
      ${({ white }) => white && "fill: #fff"};
    }
  }
`;
