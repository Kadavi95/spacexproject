import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Data from "../Assets/Data.json";

const launchesData = Data.data.launchesPast;

const ContainerSection = styled.section`
  width: 100%;
  max-width: 1140px;
  height: 47.1rem;
  border-bottom: 1px solid #5c5c5d;
`;

export function LaunchesContainer() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const incrementCurrentIndex = () => {
    if (currentIndex < 5) {
      setCurrentIndex((prevCount) => prevCount + 1);
      console.log(`IncementCounter ${currentIndex} < 5`);
    } else if (currentIndex === 5) {
      setCurrentIndex(0);
      console.log(`IncementCounter ${currentIndex} = 5`);
    }
  };
  const decrementCurrentIndex = () => {
    if (currentIndex === 0) {
      setCurrentIndex(5);
      console.log(`DecementCounter ${currentIndex} === 0`);
    } else {
      setCurrentIndex((prevCount) => prevCount - 1);
      console.log(`DecementCounter ${currentIndex} < 5`);
    }
  };
  return (
    <>
      <ContainerSection>
        <button onClick={() => incrementCurrentIndex()}>
          Counter increment {currentIndex}
        </button>
        <button onClick={() => decrementCurrentIndex()}>
          Counter decrement {currentIndex}
        </button>
      </ContainerSection>
    </>
  );
}
