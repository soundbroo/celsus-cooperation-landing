import React from "react";
import styled from "styled-components";

const FactBlock = ({ icon, description }) => (
  <Wrapper>
    {icon}
    <div>{description}</div>
  </Wrapper>
);

export default FactBlock;

const Wrapper = styled.div`
  > div {
    font-weight: 300;
    font-size: 22px;
    line-height: 140.62%;
    color: #000000;
    opacity: 0.75;
  }
`;
