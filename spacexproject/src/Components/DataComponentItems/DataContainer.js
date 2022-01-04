import styled from "styled-components";

export const DataContainer = styled.section`
  width: 100%;
  height: 321px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  border-bottom: 1px solid #5C5C5D;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    height: 500px;
    width: 70%;
    border: none;
  }
`;
