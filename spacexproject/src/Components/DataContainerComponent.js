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
const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 30%;
  align-items: flex-start;
  justify-content: space-evenly;
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
  padding: 0.5rem 1rem;
  border-radius: 2px;
  font-size: 1.6rem;
`;
const MissionPassed = styled.div`
  margin-left: 1.5rem;
  text-align: center;
  background-color: green;
  color: black;
  padding: 0.5rem 1rem;
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
  console.log(props.data.launch_date_local);

  let year = [...props.data.launch_date_local].slice(0, 4);
  let yearStringfied = year.toString().replace(/,/g, "")
  let month = [...props.data.launch_date_local].slice(5, 7);
  let monthStringfied = month.toString().replace(/,/g, "");
  let day = [...props.data.launch_date_local].slice(8, 10);
  let dayStringfied = day.toString().replace(/,/g, "")

  let ArrayOfMonths = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
  let monthName = null;

  if (monthStringfied === "01") {
    monthName = ArrayOfMonths[0]
  } else if (monthStringfied === "02") {
    monthName = ArrayOfMonths[1]
  }
   else if (monthStringfied === "03") {
    monthName = ArrayOfMonths[2]
  }
  else if (monthStringfied === "04") {
    monthName = ArrayOfMonths[3]
  }
  else if (monthStringfied === "05") {
    monthName = ArrayOfMonths[4]
  }
  else if (monthStringfied === "06") {
    monthName = ArrayOfMonths[5]
  }
  else if (monthStringfied === "07") {
    monthName = ArrayOfMonths[6]
  }
  else if (monthStringfied === "08") {
    monthName = ArrayOfMonths[7]
  }
   else if (monthStringfied === "09") {
    monthName = ArrayOfMonths[8]
  }
   else if (monthStringfied === "10") {
    monthName = ArrayOfMonths[9]
  }
   else if (monthStringfied === "11") {
    monthName = ArrayOfMonths[10]
  } 
   else if (monthStringfied === "12") {
    monthName = ArrayOfMonths[11]
  } 
  console.log(monthName);
  console.log(yearStringfied);
  console.log(dayStringfied);

  let DataString = `${dayStringfied} ${monthName} ${yearStringfied}`

  console.log(DataString);
  // let dateInverrted = [...day, "/", ...month, "/", ...year];
  // let dataString = dateInverrted.toString();
  // let dataStringedWithoutCommas = dataString.replace(/,/g, "");
  // console.log("dataString", dataString);
  // console.log("dataStringedWithoutCommas", dataStringedWithoutCommas, typeof dataStringedWithoutCommas);


  // let date = new Date(`"${dataStringedWithoutCommas}"`);
  // console.log(date);
  



  //   props.data.rocket.first_stage.cores[0].land_success;

  return (
    <>
      <DataContainer>
        <PrimaryDiv>
          <InfoContainer>
            <InformationParagraph>Mission</InformationParagraph>
            <MissionTitle>{props.data.mission_name}</MissionTitle>
          </InfoContainer>
          <InfoContainer>
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
          </InfoContainer>

          <ButtonElement target="_blank" href={props.data.links.video_link}>
            Learn more
          </ButtonElement>
        </PrimaryDiv>

        <SecondaryDiv>
          <InfoContainer>
                <InformationParagraph>Launch Date</InformationParagraph>
                <InformationParagraph>{DataString}</InformationParagraph>
          </InfoContainer>
          <InfoContainer></InfoContainer>
        </SecondaryDiv>
      </DataContainer>
    </>
  );
}
