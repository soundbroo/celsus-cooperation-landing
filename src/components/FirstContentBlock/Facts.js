import React from "react";
import styled from "styled-components";

import FactBlock from "../Common/FactBlock";

import { ReactComponent as DiagnosticsFactIcon } from "../../img/DiagnosticsFactIcon.svg";
import { ReactComponent as RegionsFactIcon } from "../../img/RegionsFactIcon.svg";

const FACTS = [
  {
    icon: <DiagnosticsFactIcon />,
    description:
      "Цельс применяется в работе отделений лучевой диагностики города Москвы в рамках эксперимента Департамента здравоохранения города Москвы и Центра диагностики и телемедицины",
  },
  {
    icon: <RegionsFactIcon />,
    description:
      "Медицинские учреждения в 13 регионах РФ уже применяют сервис в рамках пилотных проектов",
  },
];

const Facts = () => (
  <Wrapper>
    <Items>
      {FACTS?.map((item) => (
        <FactBlock {...item}></FactBlock>
      ))}
    </Items>
  </Wrapper>
);

export default Facts;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 80px;
`;

const Items = styled.div`
  display: flex;
  @media (max-width: 1250px) {
    flex-direction: column;
    padding: 0 20px;
  }
  > div {
    max-width: 592px;
    width: 100%;
    &:first-child {
      margin-right: 40px;
    }
    @media (max-width: 1250px) {
      max-width: 100%;
    }
  }
`;
