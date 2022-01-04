import styled from "styled-components";

export const BorderLineMobile = styled.div`
width: 100%;
height: 1px;
background-color: #5C5C5D;
margin-top: -1px;
display: none;
@media screen and (max-width: 768px) {
            display: block;
}
`