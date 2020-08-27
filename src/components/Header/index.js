import React, { useState } from "react";
import styled from "styled-components";

import logoRu from "../../img/CelsusLogoRu.svg";
import logoEn from "../../img/CelsusLogoEnMobile.svg";
import { ReactComponent as ButtonPdfIcon } from "../../img/ButtonPdfIcon.svg";
import { ReactComponent as NavMobileIcon } from "../../img/NavMobileIcon.svg";
import { ReactComponent as CloseIcon } from "../../img/CloseIcon.svg";

import PhoneAndMailButton from "../Common/PhoneAndMailButton";
import LangSelector from "../Common/LangSelector";
import Button from "../Common/Button";

import MobileContacts from "./MobileContacts";

const Header = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Wrapper>
      <Logo />
      <MobileContacts />
      <Nav open={open}>
        <NavLinks>
          <span>
            <NavPrefix>
              {[1, 1, 1, 1].map(() => (
                <div />
              ))}
            </NavPrefix>
            <a href="/">Продукты</a>
          </span>
          <span>
            <a href="/">Новости</a>
          </span>
          <span>
            <a href="/">Блог</a>
          </span>
          <span>
            <a href="/">О компании</a>
          </span>
        </NavLinks>
        <Close onClick={handleClose}>
          <CloseIcon />
        </Close>
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
        <NavMobileMenu onClick={handleOpen}>
          <NavMobileIcon />
        </NavMobileMenu>
        <LangSelector />
      </Buttons>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  max-width: 1230px;
  margin: auto;
  top: 28px;
  height: 44px;
  width: 100%;
  justify-content: space-around;
  @media (max-width: 768px) {
    top: -20px;
    background: #fff;
    height: 64px;
    justify-content: space-between;
  }
`;

const Logo = styled.div`
  width: 200px;
  height: 44px;
  background-repeat: no-repeat;
  background-position: center;
  background-image: ${`url(${logoRu})`};
  @media (max-width: 768px) {
    width: 130px;
    height: 28px;
    background-image: ${`url(${logoEn})`};
    margin-left: 16px;
  }
`;

const Nav = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 1250px) {
    display: ${({ open }) => (open ? "flex" : "none")};
    flex-direction: column;
    background: #fff;
    position: fixed;
    justify-content: center;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 100;
  }
`;

const NavMobileMenu = styled.div`
  transform: scale(0);
  @media (max-width: 1250px) {
    width: 24px;
    order: 1;
    transform: scale(1);
    transition: transform 0.3s ease;
    cursor: pointer;
  }
`;

const NavLinks = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 30px;
  @media (max-width: 1250px) {
    flex-direction: column;
    align-items: flex-start;
    margin-right: 0;
  }
  > span {
    display: flex;
    align-items: center;
    @media (max-width: 1250px) {
      margin-right: 0;
      color: #000;
      padding: 12px 0;
    }
    &:not(:last-child) {
      margin-right: 48px;
      @media (max-width: 1250px) {
        margin-right: 0;
      }
    }
    &:not(:first-child) {
      @media (max-width: 1250px) {
        margin-left: 20px;
      }
    }
  }
  a {
    font-size: 16px;
    line-height: 140%;
    color: #fff;
    text-decoration: none;
    @media (max-width: 1250px) {
      color: #000;
    }
  }
`;

const Close = styled.div`
  width: 32px;
  height: 32px;
  position: absolute;
  top: 32px;
  right: 32px;
  cursor: pointer;
  @media (min-width: 1251px) {
    display: none;
  }
`;

const NavPrefix = styled.div`
  display: grid;
  grid-template-rows: 50% 50%;
  grid-template-columns: 50% 50%;
  margin: 0 10px 0 40px;
  @media (max-width: 1250px) {
    margin: 0 10px 0 0;
  }
  > div {
    width: 4px;
    height: 4px;
    background: #fff;
    border-radius: 10px;
    @media (max-width: 1250px) {
      background: #000;
    }
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
    @media (max-width: 768px) {
      margin-right: 12px;
    }
  }
  @media (max-width: 768px) {
    > div:first-child {
      display: none;
    }
    > div:last-child {
      @media (max-width: 768px) {
        display: none;
      }
    }
    > div:nth-child(2) {
      background: #fff;
      border-color: #00b2ff;
      color: #00b2ff;
      max-width: 104px;
      width: 100%;
      height: 32px;
      font-size: 11px;
      line-height: 13px;
      padding: 0 9px 0 15px;
      > svg {
        width: 16px;
        height: 16px;
        margin-left: 6px;
        > path {
          fill: #00b2ff;
        }
      }
    }
  }
`;
