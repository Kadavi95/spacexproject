import styled from "styled-components";

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 30%;
  align-items: flex-start;
  justify-content: space-evenly;
  @media screen and (max-width: 768px) {
    align-items: flex-start !important;
  }
`;
