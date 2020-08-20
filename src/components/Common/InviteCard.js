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
  padding: 32px 32px 0 32px;
  box-sizing: border-box;
`;

const Icon = styled.div`
  margin-right: 32px;
`;

const List = styled.div`
  font-size: 24px;
  line-height: 140.62%;
  color: #000000;
`;
const Title = styled.span`
  font-weight: 500;
  font-size: 20px;
  line-height: 28px;
`;
const Items = styled.ul`
  padding-inline-start: 0;
  > li {
    list-style: none;
    font-size: 16px;
    line-height: 150%;
    color: #000000;
    opacity: 0.7;
    &:not(:last-child) {
      margin-bottom: 8px;
    }
  }
`;
