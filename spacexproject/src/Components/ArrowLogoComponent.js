import React from "react";
// import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import styled from "styled-components";
import { ArrowLeft } from "./ArrowLogoItems/ArrowLeft";
import { ArrowRight } from "./ArrowLogoItems/ArrowRight";
import { Container } from "./ArrowLogoItems/ArrowLogoContainer";
import { ReactComponent as SVGSpaceX } from "../Assets/SpaceX-Logo.svg";

// const ArrowLeft = styled(IoIosArrowBack)`
//   height: 4rem;
//   width: 3rem;
//   color: #f4f6fa;

//   &:hover {
//     color: #5c5c5d;
//     cursor: pointer;
//   }
// `;
// const ArrowRight = styled(IoIosArrowForward)`
//   height: 4rem;
//   width: 3rem;
//   color: #f4f6fa;

//   &:hover {
//     color: #5c5c5d;
//     cursor: pointer;
//   }
// `;
const Logo = styled.img`
  height: 6rem;
  color: white;
  margin-top: 2rem;
  @media screen and (max-width: 768px) {
    margin-top: 0rem;
    height: 3rem;
  }
`;
const SpaceXLogo = styled(SVGSpaceX)`
  /* width: 250; */
  /* height: 10; */
  margin-top: 2rem;
  height: 5rem;
  path {
    fill: #ffffff;
  }
  polyline {
    fill: #ffffff;
  }
  rect {
    fill: #ffffff;
  }
  @media screen and (max-width: 768px) {
    height: 2rem;
    margin-top: 0rem;
  } 
`;

// const Container = styled.section`
//   width: 100%;
//   height: 150px;
//   display: flex;
//   flex-direction: row;
//   justify-content: space-between;
//   align-items: center;
//   border-bottom: 1px solid #5C5C5D;
// `;

export function ArrowLogoComponent(props) {
  return (
    <>
      <Container>
        <ArrowLeft onClick={props.secondaryCallback} />
        {/* <Logo src="/assets/SpaceXW.png" alt="logoSpaceX" /> */}
        <SpaceXLogo></SpaceXLogo>
        <ArrowRight onClick={props.primaryCallback} />
      </Container>
    </>
  );
}
