import React, { useState } from "react";
import styled from "styled-components";
import { ArrowLogoComponent } from "./ArrowLogoComponent.js";
import { DataContainerComponent } from "./DataContainerComponent.js";
import { ShipsComponent } from "./ShipsComponent.js";
import { RescueShipComponent } from "./RescueShipComponent.js";
import { BorderLineComponent } from "./BorderLineComponent.js";

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
const ErrorContainer = styled.section`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgb(0, 0, 0);
  background: linear-gradient(297.9deg, #323237 15.11%, #000000 90.89%);
`;
const ErrorText = styled.h1`
  font-weight: bold;
  letter-spacing: 0.5rem;
`;

export function LaunchesContainer() {
  const { data, loading, error } = useQuery(GET_STARTS);
  const [currentIndex, setCurrentIndex] = useState(0);

  let singleItem;
  if (data !== undefined) {
    singleItem = data.launchesPast[currentIndex];
  }

  const incrementCurrentIndex = () => {
    if (currentIndex < 4 && singleItem !== undefined) {
      setCurrentIndex((prevCount) => prevCount + 1);
    } else if (currentIndex === 4 && singleItem !== undefined) {
      setCurrentIndex(0);
    }
  };
  const decrementCurrentIndex = () => {
    if (currentIndex === 0 && singleItem !== undefined) {
      setCurrentIndex(4);
    } else if (currentIndex >= 1 && singleItem !== undefined) {
      setCurrentIndex((prevCount) => prevCount - 1);
    }
  };

  if (loading) {
    return (
      <>
        <ErrorContainer>
          <h1>loading</h1>
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

        {singleItem !== undefined && (
          <DataContainerComponent data={singleItem} />
        )}
        <BorderLineComponent />

        <RescueShipComponent />
        <ShipsComponent currentIndex={currentIndex}></ShipsComponent>
      </ContainerSection>
    </>
  );
}
