import styled from "styled-components";

export const ShipContainer = styled.div`
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