import React from "react";
import styled from "styled-components";

import { ReactComponent as CelsusLogoEn } from "../../img/CelsusLogoEn.svg";
import { ReactComponent as FeedbackIcon } from "../../img/FeedbackIcon.svg";
import { ReactComponent as MailIcon } from "../../img/MailIcon.svg";
import { ReactComponent as InstagramIcon } from "../../img/InstagramIcon.svg";
import { ReactComponent as YoutubeIcon } from "../../img/YoutubeIcon.svg";
import { ReactComponent as TwitterIcon } from "../../img/TwitterIcon.svg";
import { ReactComponent as FacebookIcon } from "../../img/FacebookIcon.svg";
import { ReactComponent as VkIcon } from "../../img/VkIcon.svg";
import { ReactComponent as TelegramIcon } from "../../img/TelegramIcon.svg";
import Button from "../Common/Button";
import PhoneAndMailButton from "../Common/PhoneAndMailButton";

const Footer = () => (
  <Wrapper>
    <MainFooter>
      <CelsusLogoEn />
      <Buttons>
        <Button size="small" dark icon={<MailIcon />}>
          Подписаться
        </Button>
        <Button size="small" icon={<FeedbackIcon />}>
          Задать вопрос
        </Button>
        <PhoneAndMailButton />
      </Buttons>
    </MainFooter>
    <UnderFooter>
      <Texts>
        <span>{`© ООО "Медицинские скрининг системы" ${new Date().getFullYear()}`}</span>
        <span>248000, г. Калуга , ул. Циолковского, д.4</span>
      </Texts>
      <Social>
        <span>Мы в соц.сетях</span>
        <div>
          <InstagramIcon />
          <YoutubeIcon />
          <TwitterIcon />
          <FacebookIcon />
          <VkIcon />
          <TelegramIcon />
        </div>
      </Social>
    </UnderFooter>
  </Wrapper>
);

export default Footer;

const Wrapper = styled.div`
  max-width: 1216px;
  margin: auto;
  @media (max-width: 1250px) {
    padding: 0 20px;
  }
`;

const MainFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 196px;
  @media (max-width: 1024px) {
    flex-direction: column;
    justify-content: space-around;
    height: 100%;
    > svg {
      margin: 40px 0 35px 0;
    }
  }
`;

const UnderFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 72px;
  border-top: 1px solid #324250;
  @media (max-width: 1024px) {
    flex-direction: column;
    border-top: none;
    height: 100%;
  }
`;

const Buttons = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 1024px) {
    flex-direction: column;
    > div:first-child {
      margin-bottom: 8px;
    }
    > div:nth-child(2) {
      margin-bottom: 35px;
    }
    > div:last-child {
      margin-bottom: 48px;
    }
  }
  > div {
    margin: 0 16px;
  }
`;

const Texts = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 1024px) {
    flex-direction: column;
  }
  > span {
    color: #fff;
    font-size: 14px;
    line-height: 16px;
    &:first-child {
      margin-right: 32px;
    }
    @media (max-width: 1024px) {
      &:first-child {
        margin: 0 0 8px 0;
      }
      &:last-child {
        margin-bottom: 32px;
      }
    }
  }
`;

const Social = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 1024px) {
    flex-direction: column;
  }
  > span {
    font-size: 14px;
    line-height: 16px;
    color: #ffffff;
    opacity: 0.5;
    margin-right: 25px;
    @media (max-width: 1024px) {
      margin: 0 0 25px 0;
    }
  }
  > div {
    display: flex;
    align-items: center;
    @media (max-width: 1024px) {
      margin: 0 0 48px 0;
    }
    > svg:not(:last-child) {
      margin-right: 16px;
    }
  }
`;
