import React from "react";
import styled from "styled-components";

import { ReactComponent as Arrow } from "../../img/CarouselArrow.svg";
import { ReactComponent as ButtonPartnersDiscuss } from "../../img/ButtonPartnersDiscuss.svg";

import Button from "../Common/Button";

const Partners = () => (
  <Wrapper>
    <Title>Наши партнеры</Title>
    <Carousel>
      <Arrow style={{ transform: "rotate(180deg)" }} />
      <Content>
        {[1, 1, 1, 1, 1, 1].map(() => (
          <div />
        ))}
      </Content>
      <Arrow />
    </Carousel>
    <DiscussButton>
      <Button
        outlined
        size="small"
        fontColor="#00B2FF"
        icon={<ButtonPartnersDiscuss />}
      >
        Обсудить сотрудничество
      </Button>
    </DiscussButton>
  </Wrapper>
);

export default Partners;

const Wrapper = styled.div`
  max-width: 1216px;
  width: 100%;
  margin: 104px 0 0 0;
`;

const Title = styled.span`
  font-weight: bold;
  font-size: 16px;
  line-height: 140.62%;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #000000;
  opacity: 0.3;
`;

const Carousel = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 160px;
  margin-top: 40px;
  > svg {
    cursor: pointer;
  }
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  > div {
    width: 130px;
    height: 130px;
    border-radius: 50%;
    background: #cecece;
  }
`;

const DiscussButton = styled.div`
  display: flex;
  justify-content: center;
  margin: 40px 0 112px 0;
`;
