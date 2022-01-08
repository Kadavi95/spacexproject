import React, { useState } from "react";
import styled from "styled-components";
import { ArrowLogoComponent } from "./ArrowLogoComponent.js";
import { DataContainerComponent } from "./DataContainerComponent.js";
import { ShipsComponent } from "./ShipsComponent.js";
import { RescueShipComponent } from "./RescueShipComponent.js";
import { BorderLineComponent } from "./BorderLineComponent.js";
import { ErrorContainer } from "./ErrorContainer.js";
import { Circle } from "react-spinners-css";

import { gql, useQuery } from "@apollo/client";

const GET_STARTS = gql`
  {
    launchesPast(limit: 5) {
      mission_name
      launch_date_local
      launch_site {
        site_name_long
        site_id
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
            }
            land_success
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
  }
`;

const ContainerSection = styled.section`
  width: 100%;
  max-width: 1140px;
  border-bottom: 1px solid #5c5c5d;
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const ErrorText = styled.h1`
  font-weight: bold;
  letter-spacing: 0.5rem;
`;

export function LaunchesContainer() {
  const { data, loading, error } = useQuery(GET_STARTS);
  const [currentIndex, setCurrentIndex] = useState(0);

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
    } else if (currentIndex >= 1) {
      setCurrentIndex((prevCount) => prevCount - 1);
    }
  };

  if (loading) {
    return (
      <>
        <ErrorContainer>
          <Circle color="#ffffff"></Circle>
        </ErrorContainer>
      </>
    );
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
        <ArrowLogoComponent
          primaryCallback={() => incrementCurrentIndex()}
          secondaryCallback={() => decrementCurrentIndex()}
        ></ArrowLogoComponent>
        <BorderLineComponent />
        <DataContainerComponent data={data?.launchesPast[currentIndex]} />
        <BorderLineComponent />
        <RescueShipComponent />
        <ShipsComponent currentIndex={currentIndex} data={data.launchesPast[currentIndex]}></ShipsComponent>
      </ContainerSection>
    </>
  );
}
