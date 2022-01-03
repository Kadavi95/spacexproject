import React from "react";
import styled from "styled-components";
import { LaunchesContainer } from "./Components/LaunchesContainer.js";

const MainSection = styled.main`
  width: 100vw;
  background: rgb(0, 0, 0);
  background: linear-gradient(297.9deg, #323237 15.11%, #000000 90.89%);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function App() {
  return (
    <>
      <MainSection>
        <LaunchesContainer></LaunchesContainer>
      </MainSection>
    </>
  );
}

export default App;
