import React from "react";
// import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
// import styled from "styled-components";
import { ArrowLeft } from "./ArrowLogoItems/ArrowLeft";
import { ArrowRight } from "./ArrowLogoItems/ArrowRight";
import { Container } from "./ArrowLogoItems/ArrowLogoContainer";
// import { ReactComponent as SVGSpaceX } from "../Assets/SpaceX-Logo.svg";
import { SpaceXLogo } from "./ArrowLogoItems/SpaceXLogo";


// const SpaceXLogo = styled(SVGSpaceX)`
//   margin-top: 2rem;
//   height: 5rem;
//   path {
//     fill: #ffffff;
//   }
//   polyline {
//     fill: #ffffff;
//   }
//   rect {
//     fill: #ffffff;
//   }
//   @media screen and (max-width: 768px) {
//     height: 2rem;
//     margin-top: 0rem;
//   } 
// `;
export function ArrowLogoComponent(props) {
  return (
    <>
      <Container>
        <ArrowLeft onClick={props.secondaryCallback} />
        <SpaceXLogo></SpaceXLogo>
        <ArrowRight onClick={props.primaryCallback} />
      </Container>
    </>
  );
}
