import React from "react";
import styled from "styled-components";

import { ReactComponent as NewsCardLogo } from "../../img/NewsCardLogo.svg";

const NewsCard = ({ img, title, tags, date }) => (
  <Wrapper>
    <Image>
      {img}
      <NewsCardLogo />
    </Image>
    <Content>
      <Title>{title}</Title>
      <Footer>
        <Tags>
          {tags.map((tag) => (
            <div>{tag}</div>
          ))}
        </Tags>
        <Date>{date}</Date>
      </Footer>
    </Content>
  </Wrapper>
);

export default NewsCard;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #ffffff;
  box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.06), 0px 8px 32px rgba(0, 0, 0, 0.06);
  border-radius: 16px;
  min-width: 384px;
  overflow: hidden;
  @media (max-width: 425px) {
    min-width: 312px;
  }
  @media (max-width: 320px) {
    min-width: 280px;
  }
`;

const Image = styled.div`
  position: relative;
  height: 186px;
  width: 100%;
  background: #cecece;
  @media (max-width: 425px) {
    height: 120px;
  }
  > svg {
    position: absolute;
    bottom: 12px;
    right: 12px;
    @media (max-width: 425px) {
      bottom: -6px;
      right: 8px;
      width: 100px;
    }
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px 0;
  justify-content: space-between;
  height: 106px;
  width: 100%;
  @media (max-width: 425px) {
    padding: 16px 0;
    height: 80px;
  }
`;

const Title = styled.span`
  font-weight: 500;
  font-size: 14px;
  line-height: 140%;
  color: #000;
  padding: 0 24px;
  @media (max-width: 425px) {
    padding: 0 16px;
  }
`;

const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
  @media (max-width: 425px) {
    padding: 0 16px;
  }
`;

const Tags = styled.div`
  display: flex;
  align-items: center;
  > div {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #f2f5f7;
    border-radius: 48px;
    height: 32px;
    padding: 0 14px;
    margin-right: 4px;
    font-size: 12px;
    line-height: 18px;
    color: #000;
  }
`;

const Date = styled.div`
  font-size: 12px;
  line-height: 140.62%;
  color: #000000;
  opacity: 0.4;
`;
