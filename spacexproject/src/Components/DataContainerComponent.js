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
  console.log(props.data);
  const AirForceBaseId = [...props.data.launch_site.site_id]
    .toString()
    .replace(/,/g, "")
    .replace(/_/g, " ")
    .toUpperCase();

  const localDateProps = props.data.launch_date_local;
  const localDate = new Date(localDateProps);
  const configObject = { year: "numeric", month: "short", day: "numeric" };
  const localDateStringified = localDate.toLocaleDateString(
    "en-GB",
    configObject
  );

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
            <InformationParagraph>{localDateStringified}</InformationParagraph>
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
