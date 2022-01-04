import React from "react";
// import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import styled from "styled-components";
import { ArrowLeft } from "./ArrowLogoItems/ArrowLeft";
import { ArrowRight } from "./ArrowLogoItems/ArrowRight";
import { Container } from "./ArrowLogoItems/ArrowLogoContainer";

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
  height: 2.415rem;
  margin-top: 2rem;
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
        <Logo src="/assets/Vector.png" alt="logoSpaceX" />
        <ArrowRight onClick={props.primaryCallback} />
      </Container>
    </>
  );
}
