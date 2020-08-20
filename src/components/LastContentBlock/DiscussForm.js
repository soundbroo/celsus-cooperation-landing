import React from "react";
import styled from "styled-components";

import InputField from "../Common/InputField";
import SelectField from "../Common/SelectField";
import Button from "../Common/Button";

import DiscussFormBg from "../../img/DiscussFormBg.svg";

const DiscussForm = () => (
  <Wrapper>
    <Title>Обсудить сотрудничество</Title>
    <Row>
      <InputField placeholder="Имя" />
      <InputField placeholder="Отчество" />
      <InputField placeholder="E-mail" />
      <InputField placeholder="+7" />
    </Row>
    <Row>
      <InputField placeholder="Организация" />
      <InputField placeholder="Должность" />
    </Row>
    <Row>
      <SelectField
        placeholder="Позиция"
        options={["Так", "Или так", "Или вот так", "А может и так"]}
      />
    </Row>
    <Send>
      <Button>Отправить</Button>
      <span>
        Я ознакомлен и согласен с{" "}
        <a href="#">
          Политикой конфиденциальности и обработки персональных данных
        </a>
      </span>
    </Send>
  </Wrapper>
);

export default DiscussForm;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 48px 56px;
  background: #f2f5f7;
  background-image: ${`url(${DiscussFormBg})`};
  background-repeat: no-repeat;
  background-position: top;
  border-radius: 24px;
`;

const Title = styled.span`
  font-weight: 500;
  font-size: 24px;
  line-height: 24px;
  color: #000000;
  margin-bottom: 48px;
`;

const Row = styled.span`
  display: flex;
  align-items: center;
  margin-bottom: 12px;
  > input:not(:last-child) {
    margin-right: 12px;
  }
`;

const Send = styled.span`
  display: flex;
  align-items: center;
  margin-top: 20px;
  > div:first-child {
    margin-right: 24px;
  }
  > span {
    font-size: 12px;
    line-height: 16px;
    color: #91a3ad;
    > a {
      color: #00b2ff;
      text-decoration: none;
    }
  }
`;
