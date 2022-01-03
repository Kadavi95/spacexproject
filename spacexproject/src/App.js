import React from 'react';
import styled from 'styled-components';
import Data from "./Assets/Data.json";

const dataLaunches = Data.data.launchesPast;

const MainSection = styled.main`
width: 100vw;
height: 100vh;
background: rgb(0,0,0);
background: linear-gradient(297.9deg, #323237 15.11%, #000000 90.89%);
`

function App() {


  return (
    <>
      <MainSection></MainSection>
    </>
  );
}

export default App;
