import React, { useState } from "react";
import styled from "styled-components";

const LangSelector = () => {
  const [lang, setLang] = useState(0);
  return (
    <Wrapper>
      <Lang active={lang === 0} onClick={() => setLang(0)}>
        Ru
      </Lang>
      <Lang active={lang === 1} onClick={() => setLang(1)}>
        En
      </Lang>
    </Wrapper>
  );
};

export default LangSelector;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Lang = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  background: ${({ active }) => (active ? "#fff" : "none")};
  border-radius: 38px;
  color: #000;
  font-size: 14px;
  line-height: 16px;
  cursor: pointer;
`;
