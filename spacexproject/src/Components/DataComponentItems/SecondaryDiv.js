import styled from "styled-components";

export const SecondaryDiv = styled.div`
width: 30%;
height: 55%;
display: flex;
flex-direction: column;
align-items: flex-end;
justify-content: space-evenly;
/* background-color: white; */
@media screen and (max-width: 768px) {
  width: 100%;
  align-items: flex-start;
}
`;