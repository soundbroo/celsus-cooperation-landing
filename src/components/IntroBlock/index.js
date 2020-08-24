import React from "react";
import styled from "styled-components";

import IntroBackground from "../../img/IntroBackground.svg";
import { ReactComponent as IntroCoopIcon } from "../../img/IntroCoopIcon.svg";
import Button from "../Common/Button";

const IntroBlock = ({ children }) => (
  <Wrapper>
    <Background>
      {children}
      <Content>
        <IntroCoopIcon />
        <Info>
          <span>Сотрудничество</span>
          <div>
            <span>
              Мы открыты к сотрудничеству и совместным проектам в области
              применения искусственного интеллекта в медицине.
            </span>
            <Button>Обсудить сотрудничество</Button>
          </div>
        </Info>
      </Content>
    </Background>
  </Wrapper>
);

export default IntroBlock;

const Wrapper = styled.div`
  background: #ffffff;
  box-shadow: 0px 1px 8px rgba(0, 0, 0, 0.04), 0px 4px 32px rgba(0, 0, 0, 0.04);
  border-radius: 0px 0px 32px 32px;
  height: 470px;
  width: 100%;
`;

const Background = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  top: 0%;
  left: 0;
  right: 0;
  background: #5aceff;
  border-radius: 0px 0px 32px 32px;
  height: 265px;
  background-image: ${`url(${IntroBackground})`};
  background-repeat: no-repeat;
  background-position-y: 42px;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  margin-top: 148px;
  max-width: 1216px;
  width: 100%;
  height: 286px;
  > svg {
    width: 296px;
  }
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100%;
  width: 100%;
  @media (max-width: 1250px) {
    padding-right: 20px;
  }
  > span {
    font-weight: 500;
    font-size: 40px;
    line-height: 140.62%;
  }
  > div {
    display: flex;
    justify-content: space-between;
    @media (max-width: 900px) {
      flex-direction: column;
    }
    > div {
      flex-shrink: 0;
      @media (max-width: 900px) {
        margin-top: 40px;
      }
    }
    > span {
      font-weight: 300;
      font-size: 22px;
      line-height: 140.62%;
      max-width: 500px;
    }
  }
`;
