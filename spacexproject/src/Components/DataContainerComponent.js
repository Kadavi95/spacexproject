import React from "react";
import { DataContainer } from "./DataComponentItems/DataContainer.js";
import { PrimaryDiv } from "./DataComponentItems/PrimaryDiv.js";
import { SecondaryDiv } from "./DataComponentItems/SecondaryDiv.js";
import { InfoContainer } from "./DataComponentItems/InfoContainer.js";
import { InformationParagraph } from "./DataComponentItems/InformationParagraph.js";
import { InformationParagraphGrey } from "./DataComponentItems/InformationParagraphGrey.js";
import { MissionTitle } from "./DataComponentItems/MissionTitle.js";
import { StatusParagraph } from "./DataComponentItems/StatusParagraph.js";
import { MissionFailed } from "./DataComponentItems/MissionFailed.js";
import { MissionPassed } from "./DataComponentItems/MissionPassed.js";
import { ButtonElement } from "./DataComponentItems/ButtonElement.js";


export function DataContainerComponent(props) {

  const AirForceBaseId = [...props.data.launch_site.site_id]
    .toString()
    .replace(/,/g, "")
    .replace(/_/g, " ")
    .toUpperCase();


  let year = [...props.data.launch_date_local].slice(0, 4);
  let yearStringfied = year.toString().replace(/,/g, "");
  let month = [...props.data.launch_date_local].slice(5, 7);
  let monthStringfied = month.toString().replace(/,/g, "");
  let day = [...props.data.launch_date_local].slice(8, 10);
  let dayStringfied = day.toString().replace(/,/g, "");

  let ArrayOfMonths = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let monthName = null;

  if (monthStringfied === "01") {
    monthName = ArrayOfMonths[0];
  } else if (monthStringfied === "02") {
    monthName = ArrayOfMonths[1];
  } else if (monthStringfied === "03") {
    monthName = ArrayOfMonths[2];
  } else if (monthStringfied === "04") {
    monthName = ArrayOfMonths[3];
  } else if (monthStringfied === "05") {
    monthName = ArrayOfMonths[4];
  } else if (monthStringfied === "06") {
    monthName = ArrayOfMonths[5];
  } else if (monthStringfied === "07") {
    monthName = ArrayOfMonths[6];
  } else if (monthStringfied === "08") {
    monthName = ArrayOfMonths[7];
  } else if (monthStringfied === "09") {
    monthName = ArrayOfMonths[8];
  } else if (monthStringfied === "10") {
    monthName = ArrayOfMonths[9];
  } else if (monthStringfied === "11") {
    monthName = ArrayOfMonths[10];
  } else if (monthStringfied === "12") {
    monthName = ArrayOfMonths[11];
  }
  let DataString = `${dayStringfied} ${monthName} ${yearStringfied}`;

  return (
    <>
      <DataContainer>
        <PrimaryDiv>
          <InfoContainer>
            <InformationParagraphGrey>Mission</InformationParagraphGrey>
            <MissionTitle>{props.data.mission_name}</MissionTitle>
          </InfoContainer>
          <InfoContainer>
            <InformationParagraphGrey>Rocket</InformationParagraphGrey>
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
          <InfoContainer style={{ alignItems: "flex-end" }}>
            <InformationParagraphGrey>Launch Date</InformationParagraphGrey>
            <InformationParagraph>{DataString}</InformationParagraph>
          </InfoContainer>
          <InfoContainer style={{ alignItems: "flex-end" }}>
            <InformationParagraphGrey>Launch Site</InformationParagraphGrey>
            <InformationParagraph>{AirForceBaseId}</InformationParagraph>
          </InfoContainer>
        </SecondaryDiv>
      </DataContainer>
    </>
  );
}
