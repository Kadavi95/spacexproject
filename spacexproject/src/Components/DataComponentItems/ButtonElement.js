import styled from "styled-components";

export const ButtonElement = styled.a`
padding: 1.5rem 4rem;
background-color: transparent;
border: 2px solid #ffffff;
border-radius: 1px;
color: #ffffff;
text-decoration: none;
transition: all 0.3s ease-in-out;
font-size: 1.6rem;
&:hover {
  box-shadow: inset -8.2rem 0 0 0 #fff, inset 8.2rem 0 0 0 #fff;
  color: #000;
}
@media screen and (max-width: 768px) {
  width: 100%;
  text-align: center;
  padding: 0;
  padding: 2.5rem 0rem;
  &:hover {
    box-shadow: none;
    color: #ffffff;
  }
}
`;
