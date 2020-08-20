import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import Footer from "./components/Footer";
import LastContentBlock from "./components/LastContentBlock";
import FirstContentBlock from "./components/FirstContentBlock";
import IntroBlock from "./components/IntroBlock";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }
  * {
    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-weight: normal;
  }
`;

const App = () => (
  <>
    <GlobalStyle />
    <Wrapper>
      <LastContentBlock>
        <FirstContentBlock>
          <IntroBlock />
        </FirstContentBlock>
      </LastContentBlock>
      <Footer />
    </Wrapper>
  </>
);

export default App;

const Wrapper = styled.div`
  background: #0b1e2e;
`;
