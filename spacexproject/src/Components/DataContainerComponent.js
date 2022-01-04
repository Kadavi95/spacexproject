import React from "react";
import styled from "styled-components";
import { DataContainer } from "./DataComponentItems/DataContainer";


const PrimaryDiv = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-evenly;
`;
const SecondaryDiv = styled.div`
  width: 50%;
  height: 111px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;
const InformationParagraph = styled.p`
  font-size: 1.6rem;
  font-weight: 500;
`;
const MissionTitle = styled.h1`
  font-size: 4.2rem;
  font-weight: bold;
`;
const StatusParagraph = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const MissionFailed = styled.div`
  margin-left: 1.5rem;
  text-align: center;
  background-color: red;
  color: #fff;
  padding: .5rem 1rem;
  border-radius: 2px;
  font-size: 1.6rem;
`;
const MissionPassed = styled.div`
  margin-left: 1.5rem;
  text-align: center;
  background-color: green;
  color: black;
  padding: .5rem 1rem;
  border-radius: 2px;
  font-size: 1.6rem;
`;

const ButtonElement = styled.a`
  padding: 1.5rem 5rem;
  background-color: transparent;
  border: 2px solid #ffffff;
  border-radius: 1px;
  color: #ffffff;
  text-decoration: none;
  transition: all 0.3s ease-in-out;
  font-size: 1.6rem;
  &:hover {
    box-shadow: inset -9.2rem 0 0 0 #fff, inset 9.2rem 0 0 0 #fff;
    color: #000;
  }
`;

export function DataContainerComponent(props) {
  console.log(props);
  console.log(props.data);
  console.log(props.data.mission_name);
  console.log(props.data.links.video_link);
  //   props.data.rocket.first_stage.cores[0].land_success;

  return (
    <>
      <DataContainer>
        <PrimaryDiv>
          <InformationParagraph>Mission</InformationParagraph>
          <MissionTitle>{props.data.mission_name}</MissionTitle>
          <InformationParagraph>Rocket</InformationParagraph>
          <StatusParagraph>
            <InformationParagraph>
              {props.data.rocket.rocket_name}
            </InformationParagraph>
            {props.data.rocket.first_stage.cores[0].land_success === true ? (
              <MissionPassed>Recovered</MissionPassed>
            ) : (
              <MissionFailed>Unrecovered</MissionFailed>
            )}
          </StatusParagraph>

          <ButtonElement target="_blank" href={props.data.links.video_link}>
            Learn more
          </ButtonElement>
        </PrimaryDiv>

        <SecondaryDiv></SecondaryDiv>
      </DataContainer>
    </>
  );
}
