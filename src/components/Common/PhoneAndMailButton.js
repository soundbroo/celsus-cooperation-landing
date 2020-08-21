import React from "react";
import styled from "styled-components";

import { ReactComponent as PhoneIcon } from "../../img/PhoneIcon.svg";

const PhoneAneMailButton = ({ dark }) => (
  <Wrapper>
    <Icon dark={dark}>
      <PhoneIcon />
    </Icon>
    <Contacts dark={dark}>
      <span>+7 499 704 05-04</span>
      <span>celsus@celsus.ai</span>
    </Contacts>
  </Wrapper>
);

export default PhoneAneMailButton;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 44px;
`;

const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: ${({ dark }) => (dark ? 1 : 0.32)};
  border: 1px solid #ffffff;
  border-radius: 30px;
  width: 44px;
  height: 44px;
  margin-right: 12px;
`;

const Contacts = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  > span {
    color: ${({ dark }) => (dark ? "#000" : "#fff")};
    &:first-child {
      font-weight: 500;
      font-size: 16px;
      line-height: 19px;
    }
    &:last-child {
      font-size: 14px;
      line-height: 16px;
    }
  }
`;
