import styled from "styled-components";
import { IoIosArrowForward } from "react-icons/io";

export const ArrowRight = styled(IoIosArrowForward)`
height: 4rem;
width: 3rem;
color: #f4f6fa;

&:hover {
  color: #5c5c5d;
  cursor: pointer;
}
@media screen and (max-width: 768px) {
  height: 6rem;
  width: 5rem;
}
`;