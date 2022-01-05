import styled from "styled-components";
import { ReactComponent as SVGSpaceX } from "../../Assets/SpaceX-Logo.svg";

export const SpaceXLogo = styled(SVGSpaceX)`
  margin-top: 2rem;
  height: 5rem;
  path {
    fill: #ffffff;
  }
  polyline {
    fill: #ffffff;
  }
  rect {
    fill: #ffffff;
  }
  @media screen and (max-width: 768px) {
    height: 2rem;
    margin-top: 0rem;
  }
`;
