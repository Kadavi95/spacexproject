import styled from "styled-components";

export const ShipsContainer = styled.section`
  width: 100%;
  height: 550px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  border-bottom: 1px solid #5c5c5d;
  @media screen and (max-width: 768px) {
    width: 70%;
    overflow: scroll;
    justify-content: center;
    height: 660px;
  }
`;
