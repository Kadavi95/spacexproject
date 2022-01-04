import React from "react";
import styled from "styled-components";

const RescueShipContainer = styled.section`
  width: 100%;
  height: 6rem;
  display: flex;
  justify-content: left;
  align-items: center;
`;
const RescueShipText = styled.p`
  color: #868686;
  font-size: 1.6rem;
`;

export function RescueShipComponent() {
  return (
    <>
      <RescueShipContainer>
        <RescueShipText>Rescue Ships</RescueShipText>
      </RescueShipContainer>
    </>
  );
}
