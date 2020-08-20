import React from "react";
import styled from "styled-components";

import NewsCard from "../Common/NewsCard";
import Button from "../Common/Button";

import { ReactComponent as ButtonArrowIcon } from "../../img/ButtonArrowIcon.svg";
import DiscussForm from "./DiscussForm";

const NEWS = [
  {
    title: "Переговоры на этапе подписания соглашений",
    tags: ["Статья", "Публикации в сми"],
    date: "12.07.2019",
  },
  {
    title: "Когда вечная молодость станет реальностью",
    tags: ["Статья", "Публикации в сми"],
    date: "12.07.2019",
  },
  {
    title: "В Москве для анализа маммограм начали применять технологии ИИ",
    tags: ["Статья", "Публикации в сми"],
    date: "12.07.2019",
  },
];

const LastContentBlock = ({ children }) => (
  <Wrapper>
    {children}
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
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #000000;
  opacity: 0.3;
  text-align: left;
  margin-bottom: 24px;
`;

const NewsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const News = styled.div`
  display: flex;
  justify-content: center;
  > div:not(:last-child) {
    margin-right: 32px;
  }
`;

const AllNewsButton = styled.div`
  display: flex;
  margin: 32px 0 0 0;
`;

const DiscussFormWrapper = styled.div`
  max-width: 1216px;
  width: 100%;
  margin: 88px 0;
`;
