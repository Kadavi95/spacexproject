import React from "react";
import styled from "styled-components";
import { LaunchesContainer } from "./Components/LaunchesContainer.js";

//2//
import { ApolloProvider, InMemoryCache, ApolloClient } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://api.spacex.land/graphql",
  cache: new InMemoryCache(),
});

const MainSection = styled.main`
  width: 100vw;
  background: rgb(0, 0, 0);
  background: linear-gradient(297.9deg, #323237 15.11%, #000000 90.89%);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <MainSection>
          <LaunchesContainer></LaunchesContainer>
        </MainSection>
      </ApolloProvider>
    </>
  );
}

export default App;
