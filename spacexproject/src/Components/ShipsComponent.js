import React from "react";
import styled from "styled-components";
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

const GET_SHIPS = gql`
  {
    ships {
      home_port
      image
      name
      weight_kg
      id
    }
  }
`;

export function ShipsComponent(props) {
  const { data, loading, error } = useQuery(GET_SHIPS);

  const SetOne = [];
  const SetThree = [];
  const SetFour = [];
  const SetFive = [];

  if (data !== undefined) {
    SetOne.push(data.ships[0]);
    SetOne.push(data.ships[21]);
    SetOne.push(data.ships[5]);
    SetOne.push(data.ships[3]);
    SetThree.push(data.ships[7]);
    SetFour.push(data.ships[7]);
    SetFour.push(data.ships[3]);
    SetFour.push(data.ships[17]);
    SetFive.push(data.ships[0]);
    SetFive.push(data.ships[5]);
    SetFive.push(data.ships[21]);
    SetFive.push(data.ships[3]);
  }

  let FirstData;
  let ThirdData;
  let FourthData;
  let FifthData;

  if (data !== undefined) {
    FirstData = SetOne.map((item, index) => {
      return (
        <>
          <ShipContainer key={item.id + index}>
            <IMGContainer src={item.image} alt={item.name}></IMGContainer>
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
    });
    ThirdData = SetThree.map((item, index) => {
      return (
        <>
          <ShipContainer key={item.id + index}>
            <IMGContainer src={item.image} alt={item.name}></IMGContainer>
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
    });
    FourthData = SetFour.map((item, index) => {
      return (
        <>
          <ShipContainer key={item.id + index}>
            <IMGContainer src={item.image} alt={item.name}></IMGContainer>
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
    });
    FifthData = SetFive.map((item, index) => {
      return (
        <>
          <ShipContainer key={item.id + index}>
            <IMGContainer src={item.image} alt={item.name}></IMGContainer>
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
    });
  }

  if (data !== undefined) {
    if (props.currentIndex === 0 && FirstData !== undefined) {
      return (
        <>
          <ShipsContainer>{FirstData}</ShipsContainer>
        </>
      );
    } else if (props.currentIndex === 1) {
      return <ShipsContainer></ShipsContainer>;
    } else if (props.currentIndex === 2 && ThirdData !== undefined) {
      return (
        <>
          <ShipsContainer>{ThirdData}</ShipsContainer>
        </>
      );
    } else if (props.currentIndex === 3 && FourthData !== undefined) {
      return (
        <>
          <ShipsContainer>{FourthData}</ShipsContainer>
        </>
      );
    } else if (props.currentIndex === 4 && FifthData !== undefined) {
      return (
        <>
          <ShipsContainer>{FifthData}</ShipsContainer>
        </>
      );
    }
  } else {
    return null;
  }
}
