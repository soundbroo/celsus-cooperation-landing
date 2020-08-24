import React from "react";
import styled from "styled-components";

import CooperationInvite from "./CooperationInvite";
import Facts from "./Facts";
import Button from "../Common/Button";

import { ReactComponent as ButtonPdfIcon } from "../../img/ButtonPdfIcon.svg";

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
  max-width: 1216px;
  width: 100%;
  margin-bottom: 88px;
  > span {
    font-weight: 500;
    font-size: 20px;
    line-height: 140.62%;
    color: #000000;
    margin-bottom: 20px;
    @media (max-width: 1250px) {
      padding: 0 20px;
    }
  }
  > div {
    align-self: flex-start;
    @media (max-width: 1250px) {
      margin: 0 20px;
    }
  }
`;
