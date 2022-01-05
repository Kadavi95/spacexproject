import React from "react";
import styled, { StyledComponent } from "styled-components";
import { gql, useQuery } from "@apollo/client";

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
const ShipsContainer = styled.section`
  width: 100%;
  height: 550px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  border-bottom: 1px solid #5c5c5d;
  @media screen and (max-width: 768px){
    width: 70%;
    overflow: scroll;
    justify-content: center;
    height: 660px;

    
  }
`;

const ShipContainer = styled.div`
  width: 24rem;
  height: 26rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  border-radius: 10px;
  @media screen and (max-width: 768px){
    width: 100%;
    height: 32rem;
    margin-bottom: 2rem;
  }
`;

const IMGContainer = styled.img`
  width: 100%;
  height: 14rem;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

const HeadingContainer = styled.div`
  width: 90%;
  height: 6rem;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #e8e8e8;
`;
const Heading = styled.h1`
  font-weight: 500;
  font-size: 1.6rem;
  color: #000;
`;

const InfoContainer = styled.div`
  width: 90%;
  height: 6rem;
  display: flex;
  flex-direction: row;
`;

const StaticContainer = styled.div`
  width: 35%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  /* background-color: blue; */
`;
const StaticInfo = styled.p`
  color: #868686;
`;
const StaticItemInfo = styled.p`
  color: #000;
`;

export function ShipsComponent(props) {
  const { data, loading, error } = useQuery(GET_SHIPS);

  const SetOne = [];
  // const SetTwo = [];
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
            <InfoContainer>
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
            </InfoContainer>
          </ShipContainer>
        </>
      );
    });
    ThirdData = SetThree.map((item, index) => {
      console.log(item);
      return (
        <>
          <ShipContainer key={item.id + index}>
            <IMGContainer src={item.image} alt={item.name}></IMGContainer>
            <HeadingContainer>
              <Heading>{item.name}</Heading>
            </HeadingContainer>
            <InfoContainer>
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
            </InfoContainer>
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
            <InfoContainer>
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
            </InfoContainer>
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
            <InfoContainer>
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
            </InfoContainer>
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
      return <ShipsContainer ></ShipsContainer>;
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
