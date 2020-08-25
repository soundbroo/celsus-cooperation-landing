import React from "react";
import styled from "styled-components";

const InviteCard = ({ icon, title, items }) => (
  <Wrapper>
    <Icon>{icon}</Icon>
    <List>
      <Title>{title}</Title>
      <Items>
        {items.map((item) => (
          <li>{item}</li>
        ))}
      </Items>
    </List>
  </Wrapper>
);

export default InviteCard;

const Wrapper = styled.div`
  display: flex;
  background: #f2f5f7;
  border-radius: 24px;
  padding: 32px;
  box-sizing: border-box;
  @media (max-width: 768px) {
    padding: 20px 20px 20px 32px;
  }
`;

const Icon = styled.div`
  margin-right: 32px;
  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    > svg {
      width: 32px;
    }
  }
`;

const List = styled.div``;
const Title = styled.span`
  font-weight: 500;
  font-size: 20px;
  line-height: 28px;
  @media (max-width: 768px) {
    font-size: 18px;
    line-height: 22px;
  }
`;
const Items = styled.ul`
  padding-inline-start: 0;
  margin-block-end: 0;
  > li {
    list-style: none;
    font-size: 16px;
    line-height: 150%;
    color: #000000;
    opacity: 0.7;
    &:not(:last-child) {
      margin-bottom: 8px;
    }
    @media (max-width: 768px) {
      font-size: 14px;
      line-height: 18px;
    }
  }
`;
