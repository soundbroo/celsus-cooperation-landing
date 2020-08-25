import React from "react";
import styled from "styled-components";

import LangSelector from "../Common/LangSelector";

const Header = () => (
  <Wrapper>
    <a href="mailto:celsus@celsus.ai">celsus@celsus.ai</a>
    <span>
      <a href="tel:+7-499-704-05-04">+7 499 704 05-04</a>
      <LangSelector />
    </span>
  </Wrapper>
);

export default Header;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  background: #f2f5f7;
  height: 40px;
  top: -40px;
  left: 0;
  right: 0;
  padding: 0 16px;
  > span {
    display: flex;
    align-items: center;
    > a {
      margin-right: 12px;
    }
  }
  a {
    text-decoration: none;
    font-size: 12px;
    line-height: 140%;
    color: #000;
  }
  @media (min-width: 769px) {
    display: none;
  }
`;
