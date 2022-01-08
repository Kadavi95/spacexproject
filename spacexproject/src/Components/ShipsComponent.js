import React, { useState } from "react";
import { gql, useQuery } from "@apollo/client";
import { ShipsContainer } from "./ShipsComponentItems/ShipsContainer.js";
import { ShipContainer } from "./ShipsComponentItems/ShipContainer.js";
import { IMGContainer } from "./ShipsComponentItems/IMGContainer.js";
import { HeadingContainer } from "./ShipsComponentItems/HeadingContainer.js";
import { Heading } from "./ShipsComponentItems/Heading.js";
import { InfoContainerShip } from "./ShipsComponentItems/InfoContainerShip.js";
import { StaticContainer } from "./ShipsComponentItems/StaticContainer.js";
import { StaticInfo } from "./ShipsComponentItems/StaticInfo.js";
import { StaticItemInfo } from "./ShipsComponentItems/StaticItemInfo.js";
import { ErrorContainer } from "./ErrorContainer.js";
import { Circle } from "react-spinners-css";

const GET_SHIPS = gql`
  {
    launchesPast(limit: 5) {
      mission_name
      ships {
        name
        home_port
        image
        weight_kg
      }
    }
  }
`;

export function ShipsComponent(props) {
  const actualMissionNameProps = props.data.mission_name;
  const [usedShips, setUsedShips] = useState([]);
  const { data, loading, error } = useQuery(GET_SHIPS);

  const shipsArray = data;

  if (data !== undefined) {
    const shipsArrayLaunchesPast = shipsArray.launchesPast;
    const singleMissionIndex = shipsArrayLaunchesPast.findIndex(
      (item) => item.mission_name === actualMissionNameProps
    );
    const singleMission = shipsArrayLaunchesPast.slice(
      singleMissionIndex,
      singleMissionIndex + 1
    );
    const singleMissionShipsArrayProperty = singleMission[0].ships;
    if (usedShips !== singleMissionShipsArrayProperty) {
      setUsedShips(singleMissionShipsArrayProperty);
    }
  }


  if (loading) {
    return (
      <>
        <ErrorContainer>
          <Circle color="#ffffff"></Circle>
        </ErrorContainer>
      </>
    );
  }
  return (
    <>
      <ShipsContainer>
        {usedShips.length > 0
          ? usedShips.map((item, index) => {
              console.log(item);
              return (
                <>
                  <ShipContainer key={item.id + index}>
                    <IMGContainer
                      src={item.image}
                      alt={item.name}
                    ></IMGContainer>
                    <HeadingContainer>
                      <Heading>{item.name}</Heading>
                    </HeadingContainer>
                    <InfoContainerShip>
                      <StaticContainer>
                        <StaticInfo>Home Port</StaticInfo>
                        <StaticInfo>Weight[kg]</StaticInfo>
                      </StaticContainer>
                      <StaticContainer>
                        <StaticItemInfo>{item.home_port}</StaticItemInfo>
                        <StaticItemInfo>
                          {item.weight_kg === null ? "unknown" : item.weight_kg}
                        </StaticItemInfo>
                      </StaticContainer>
                    </InfoContainerShip>
                  </ShipContainer>
                </>
              );
            })
          : ""}
      </ShipsContainer>
    </>
  );
}