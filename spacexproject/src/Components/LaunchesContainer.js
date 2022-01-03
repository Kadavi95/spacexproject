import React, { useState } from "react";
import styled from "styled-components";
import { ArrowLogoContainer } from "./ArrowLogoContainer";

// import { useQuery } from "@apollo/client";
// import { querySpaceX } from "..";

import { gql, useQuery } from "@apollo/client";

const GET_ROCKETS = gql`
  {
    launchesPast(limit: 5) {
      mission_name
      launch_date_local
      launch_site {
        site_name_long
      }
      links {
        article_link
        video_link
      }
      rocket {
        rocket_name
        first_stage {
          cores {
            flight
            core {
              reuse_count
              status
            }
          }
        }
        second_stage {
          payloads {
            payload_type
            payload_mass_kg
          }
        }
      }
    }
    ships {
      home_port
      image
      name
    }
  }
`;

const ContainerSection = styled.section`
  width: 100%;
  max-width: 1140px;
  height: 47.1rem;
  border-bottom: 1px solid #5c5c5d;
`;
const ErrorContainer = styled.section`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: red;
`;
const ErrorText = styled.h1`
  font-weight: bold;
  letter-spacing: 0.5rem;
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  color: white;
`;

export function LaunchesContainer() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { data, loading, error } = useQuery(GET_ROCKETS);
  console.log(data);

  const incrementCurrentIndex = () => {
    if (currentIndex < 4) {
      setCurrentIndex((prevCount) => prevCount + 1);
    } else if (currentIndex === 4) {
      setCurrentIndex(0);
    }
  };
  const decrementCurrentIndex = () => {
    if (currentIndex === 0) {
      setCurrentIndex(4);
    } else {
      setCurrentIndex((prevCount) => prevCount - 1);
    }
  };

  if (loading) {
    return <h1>loading</h1>;
  }
  if (error) {
    return (
      <ErrorContainer>
        <ErrorText>Wystąpił błąd z API</ErrorText>
      </ErrorContainer>
    );
  }
  return (
    <>
      <ContainerSection>
        <ArrowLogoContainer
          primaryCallback={() => incrementCurrentIndex()}
          secondaryCallback={() => decrementCurrentIndex()}
        ></ArrowLogoContainer>
        <button onClick={() => incrementCurrentIndex()}>
          Counter increment {currentIndex}
        </button>
        {/* <Title>Abcabc{data[currentIndex].mission_name}</Title> */}
        <button onClick={() => decrementCurrentIndex()}>
          Counter decrement {currentIndex}
        </button>
      </ContainerSection>
    </>
  );
}
