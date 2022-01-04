import React from "react";
import { StyledComponent } from "styled-components";
import { gql, useQuery } from "@apollo/client";

const GET_SHIPS = gql`
  {
    ships {
      home_port
      image
      name
    }
  }
`;

export function ShipsComponent(props) {
  const { data, loading, error } = useQuery(GET_SHIPS);
  console.log(data);
  const SetOne = [];
  if (data !== undefined) {
    console.log(data.ships[0]);
    SetOne.push(data.ships[0]);
    console.log(SetOne);
  }
  if (props.currentIndex === 0) {
    return <p>Index 0 SHIP</p>;
  } else if (props.currentIndex === 1) {
    return <p>Index 1 SHIP</p>;
  } else if (props.currentIndex === 2) {
    return <p>Index 2 SHiP</p>;
  } else if (props.currentIndex === 3) {
    return <p>Index 3 SHIP</p>;
  } else if (props.currentIndex === 4) {
    return <p>Index 4 SHIP</p>;
  }
}
