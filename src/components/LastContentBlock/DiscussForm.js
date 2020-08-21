import React from "react";
import styled from "styled-components";

import InputField from "../Common/InputField";
import SelectField from "../Common/SelectField";
import Button from "../Common/Button";

import DiscussFormBg from "../../img/DiscussFormBg.svg";

const DiscussForm = () => (
  <Wrapper>
    <Title>Обсудить сотрудничество</Title>
    <FirstRow>
      <InputField placeholder="Имя" style={{ flex: 3 }} />
      <InputField placeholder="Отчество" style={{ flex: 3 }} />
      <InputField placeholder="E-mail" style={{ flex: 4 }} />
      <InputField placeholder="+7" style={{ flex: 2 }} />
    </FirstRow>
    <SecondRow>
      <InputField placeholder="Организация" />
      <InputField placeholder="Должность" />
    </SecondRow>
    <ThirdRow>
      <SelectField
        placeholder="Позиция"
        options={["Так", "Или так", "Или вот так", "А может и так"]}
      />
    </ThirdRow>
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

const Row = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 12px;
  flex: 1;
  max-width: 700px;
  > div:not(:last-child) {
    margin-right: 12px;
  }
`;

const FirstRow = styled(Row)`
  max-width: 880px;
  > div:nth-child(1),
  div:nth-child(2) {
    flex: 6;
  }
  > div:nth-child(3) {
    flex: 7;
  }
  > div:nth-child(4) {
    flex: 5;
  }
`;

const SecondRow = styled(Row)`
  max-width: 820px;
  > div:nth-child(1) {
    flex: 2;
  }
  > div:nth-child(2) {
    flex: 1;
  }
`;

const ThirdRow = styled(Row)`
  > div {
    flex: 1;
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
