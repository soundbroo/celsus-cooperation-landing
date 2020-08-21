import React from "react";
import styled from "styled-components";

import { ReactComponent as CelsusLogoRu } from "../../img/CelsusLogoRu.svg";
import { ReactComponent as ButtonPdfIcon } from "../../img/ButtonPdfIcon.svg";

import PhoneAndMailButton from "../Common/PhoneAndMailButton";
import LangSelector from "../Common/LangSelector";
import Button from "../Common/Button";

const Header = () => (
  <Wrapper>
    <CelsusLogoRu />
    <NavPrefix>
      {[1, 1, 1, 1].map(() => (
        <div />
      ))}
    </NavPrefix>
    <Nav>
      <a href="/">Продукты</a>
      <a href="/">Новости</a>
      <a href="/">Блог</a>
      <a href="/">О компании</a>
    </Nav>
    <Buttons>
      <PhoneAndMailButton dark />
      <Button
        outlined
        white
        size="small"
        fontColor="#FFF"
        icon={<ButtonPdfIcon />}
      >
        Презентация
      </Button>
      <LangSelector />
    </Buttons>
  </Wrapper>
);

export default Header;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  max-width: 1216px;
  margin: auto;
  top: 28px;
  height: 44px;
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 60px;
  > a {
    font-size: 16px;
    line-height: 140%;
    color: #fff;
    text-decoration: none;
    &:not(:last-child) {
      margin-right: 48px;
    }
  }
`;

const NavPrefix = styled.div`
  display: grid;
  grid-template-rows: 50% 50%;
  grid-template-columns: 50% 50%;
  margin: 0 10px 0 40px;
  > div {
    width: 4px;
    height: 4px;
    background: #ffffff;
    border-radius: 10px;
  }
  > div:nth-child(2n) {
    margin-left: 2px;
  }
  > div:nth-child(1),
  div:nth-child(2) {
    margin-bottom: 6px;
  }
`;

const Buttons = styled.div`
  display: flex;
  align-items: center;
  > div:not(:last-child) {
    margin-right: 24px;
  }
`;
