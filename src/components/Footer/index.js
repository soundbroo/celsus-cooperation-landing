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
`;

const MainFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 196px;
`;

const UnderFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 72px;
  border-top: 1px solid #324250;
`;

const Buttons = styled.div`
  display: flex;
  align-items: center;
  > div {
    margin: 0 16px;
  }
`;

const Texts = styled.div`
  display: flex;
  align-items: center;
  > span {
    color: #fff;
    font-size: 14px;
    line-height: 16px;
    &:first-child {
      margin-right: 32px;
    }
  }
`;

const Social = styled.div`
  display: flex;
  align-items: center;
  > span {
    font-size: 14px;
    line-height: 16px;
    color: #ffffff;
    opacity: 0.5;
    margin-right: 18px;
  }
  > div {
    display: flex;
    align-items: center;
    > svg {
      margin-left: 8px;
    }
  }
`;
