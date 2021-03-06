import React from "react";
import styled from "styled-components";

import InviteCard from "../Common/InviteCard";

import { ReactComponent as InviteCardMedicalIcon } from "../../img/InviteCardMedicalIcon.svg";

const CARDS = [
  {
    icon: <InviteCardMedicalIcon />,
    title: "Медицинские учреждения",
    items: ["Пилотные проекты", "Совместная научная работа", "Научные проекты"],
  },
  {
    icon: <InviteCardMedicalIcon />,
    title: "Специалисты лучевой диагностики",
    items: ["Пилотные проекты", "Совместная научная работа", "Научные проекты"],
  },
  {
    icon: <InviteCardMedicalIcon />,
    title: "Разработчики програмного обеспечения для медицинских учреждений",
    items: ["Пилотные проекты", "Совместная научная работа", "Научные проекты"],
  },
  {
    icon: <InviteCardMedicalIcon />,
    title: "Производители медицинского диагностического оборудования",
    items: ["Пилотные проекты", "Совместная научная работа", "Научные проекты"],
  },
  {
    icon: <InviteCardMedicalIcon />,
    title: "Дистрибьюторы медоборудования",
    items: ["Пилотные проекты", "Совместная научная работа", "Научные проекты"],
  },
  {
    icon: <InviteCardMedicalIcon />,
    title: "СМИ, организаторы мероприятий",
    items: ["Пилотные проекты", "Совместная научная работа", "Научные проекты"],
  },
];

const CooperationInvite = () => (
  <Wrapper>
    <Title>Приглашаем к сотрудничеству</Title>
    <Cards>
      {CARDS.map((card) => (
        <InviteCard {...card} />
      ))}
    </Cards>
  </Wrapper>
);

export default CooperationInvite;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1216px;
  width: 100%;
  margin-bottom: 106px;
  @media (max-width: 1250px) {
    margin-bottom: 62px;
  }
`;

const Title = styled.div`
  font-size: 24px;
  line-height: 140.62%;
  color: #000000;
  margin: 72px 0 56px 0;
  @media (max-width: 1250px) {
    padding: 0 20px;
  }
  @media (max-width: 768px) {
    margin: 40px 0 32px 0;
    font-weight: 300;
    font-size: 18px;
  }
`;

const Cards = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  @media (max-width: 1250px) {
    grid-template-columns: 100%;
    padding: 0 20px;
  }
  > div {
    margin-bottom: 32px;
    @media (max-width: 1250px) {
      margin-bottom: 16px;
    }
  }
  > div:nth-child(2n + 1) {
    margin-right: 16px;
    @media (max-width: 1250px) {
      margin-right: 0;
    }
  }
  > div:nth-child(2n) {
    margin-left: 16px;
    @media (max-width: 1250px) {
      margin-left: 0;
    }
  }
`;
