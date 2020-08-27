import React from "react";
import styled from "styled-components";

import NewsCard from "../Common/NewsCard";
import Button from "../Common/Button";

import { ReactComponent as ButtonArrowIcon } from "../../img/ButtonArrowIcon.svg";
import DiscussForm from "./DiscussForm";
import Partners from "./Partners";

const NEWS = [
  {
    title: "Переговоры на этапе подписания соглашений",
    tags: ["Статья", "Публикаци"],
    date: "12.07.2019",
  },
  {
    title: "Когда вечная молодость станет реальностью",
    tags: ["Статья", "Публикаци"],
    date: "12.07.2019",
  },
  {
    title: "В Москве для анализа маммограм начали применять технологии ИИ",
    tags: ["Статья", "Публикаци"],
    date: "12.07.2019",
  },
];

const LastContentBlock = ({ children }) => (
  <Wrapper>
    {children}
    <Partners />
    <NewsWrapper>
      <Title>Новости</Title>
      <News>
        {NEWS.map((el) => (
          <NewsCard {...el} />
        ))}
      </News>
      <AllNewsButton>
        <Button
          size="small"
          fontColor="#000"
          fontSize="small"
          grey
          icon={<ButtonArrowIcon />}
        >
          Все публикации
        </Button>
      </AllNewsButton>
    </NewsWrapper>
    <DiscussFormWrapper>
      <DiscussForm />
    </DiscussFormWrapper>
  </Wrapper>
);

export default LastContentBlock;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #fff;
  align-items: center;
  border-bottom-left-radius: 24px;
  border-bottom-right-radius: 24px;
`;

const Title = styled.div`
  font-size: 16px;
  line-height: 140.62%;
  font-weight: bold;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #000000;
  opacity: 0.3;
  text-align: left;
  margin-bottom: 24px;
  @media (max-width: 1250px) {
    padding: 0 20px;
  }
  @media (max-width: 768px) {
    font-size: 12px;
    line-height: 130%;
  }
`;

const NewsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1216px;
  width: 100%;
`;

const News = styled.div`
  display: flex;
  width: 100%;
  @media (max-width: 1250px) {
    overflow-x: auto;
    padding: 32px 0;
    margin: -32px 0;
    ::-webkit-scrollbar {
      height: 0;
    }
  }
  > div:not(:last-child) {
    margin-right: 32px;
    @media (max-width: 768px) {
      margin-right: 16px;
    }
  }
  > div:first-child {
    @media (max-width: 1250px) {
      margin-left: 20px;
    }
  }
  > div:last-child {
    @media (max-width: 1250px) {
      margin-right: 20px;
    }
  }
`;

const AllNewsButton = styled.div`
  display: flex;
  margin: 32px 0 0 0;
  @media (max-width: 1250px) {
    margin: 32px 0 0 32px;
  }
  > div {
    @media (max-width: 768px) {
      font-size: 12px;
      line-height: 16px;
    }
  }
`;

const DiscussFormWrapper = styled.div`
  max-width: 1216px;
  width: 100%;
  margin: 88px 0;
  @media (max-width: 768px) {
    margin: 56px 0;
  }
`;
