import styled from "styled-components";

export const Container = styled.section`
width: 100%;
height: 150px;
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
border-bottom: 1px solid #5C5C5D;
@media screen and (max-width: 768px) {
            height: 100px;
            width: 70%;
  }
`;