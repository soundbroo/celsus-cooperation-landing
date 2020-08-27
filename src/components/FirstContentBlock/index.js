import React from "react";
import styled from "styled-components";

import CooperationInvite from "./CooperationInvite";
import Facts from "./Facts";
import Button from "../Common/Button";

import { ReactComponent as ButtonPdfIcon } from "../../img/ButtonPdfIcon.svg";
import presentationLeftBg from "../../img/PresentationLeftBg.svg";
import presentationCenterBg from "../../img/PresentationCenterBg.svg";
import presentationRightBg from "../../img/PresentationRightBg.svg";

const FirstContentBlock = ({ children }) => (
  <Wrapper>
    {children}
    <CooperationInvite />
    <Facts />
    <DownloadPresentation>
      <span>Скачайте презентацию, чтобы узнать о сервисе больше</span>
      <Button
        outlined
        size="small"
        fontColor="#00B2FF"
        icon={<ButtonPdfIcon />}
      >
        Презентация
      </Button>
    </DownloadPresentation>
  </Wrapper>
);

export default FirstContentBlock;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background: linear-gradient(
      180deg,
      #ffffff 72.1%,
      rgba(255, 255, 255, 0) 100%
    ),
    linear-gradient(0deg, #f2f5f7, #f2f5f7), #f2f5f7;
  border-bottom-left-radius: 24px;
  border-bottom-right-radius: 24px;
`;

const DownloadPresentation = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 692px;
  width: 100%;
  height: 188px;
  background: #fff;
  border-radius: 24px;
  margin-bottom: -96px;
  background-image: ${`url(${presentationLeftBg}), url(${presentationCenterBg}), url(${presentationRightBg})`};
  background-repeat: no-repeat;
  background-position-x: left, center, right;
  background-position-y: bottom, center, bottom;
  box-shadow: 0px 1px 8px rgba(0, 0, 0, 0.04), 0px 4px 32px rgba(0, 0, 0, 0.04);
  @media (max-width: 768px) {
    width: calc(100% - 32px);
    background-position-x: -32px, center, calc(100% + 32px);
    background-size: 27%, 100%, 27%;
  }
  @media (max-width: 425px) {
    background-size: 35%, 100%, 35%;
  }
  > span {
    font-weight: 500;
    font-size: 20px;
    line-height: 140.62%;
    color: #000000;
    margin-bottom: 20px;
    max-width: 304px;
    text-align: center;
    @media (max-width: 768px) {
      padding: 0 16px;
      font-size: 18px;
    }
  }
`;
