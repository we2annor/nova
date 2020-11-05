import React from "react";
import styled from "styled-components";
import CurrentWeather from "./components/CurrentWeather";
import Days from "./components/Days";

const AppContainer = styled.div`
  width: 80vw;
  margin: 0 auto;
  border: 1px solid #4d4d4d;
  padding: 1.5rem;
  background-color: #181818;
  text-align: center;

  @media (max-width: 37.5rem) {
    width: 95vw;
  }

  @media (max-width: 30rem) {
    width: 100vw;
  }
`;

const App = () => {
  return (
    <AppContainer>
      <CurrentWeather />
      <Days />
    </AppContainer>
  );
};

export default App;
