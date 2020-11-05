import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  border: 1px solid #3d3d3d;
  background-color: #5d5d5d;
  width: 100%;
  height: 12vh;
  margin: 1rem 0;
  display: inline-block;
  border-radius: 1rem;
  position: relative;

  @media (max-width: 30rem) {
    height: 25vh;
  }
`;

const CurrentDay = styled.section`
  display: inline-block;
  padding: 1.5rem;
  font-size: 3rem;
  position: absolute;
  left: 0;
  bottom: 1rem;

  @media (max-width: 30rem) {
    position: relative;
    display: block;
    padding: 1.5rem 0.5rem;
    bottom: 0;
  }
`;

const Temp = styled.section`
  display: inline-block;
  padding: 1.5rem;
  position: absolute;
  left: 30rem;
  bottom: 1rem;
  font-size: 3rem;
  font-weight: 500;

  @media (max-width: 75rem) {
    left: 25rem;
  }

  @media (max-width: 56.25rem) {
    left: 20rem;
  }

  @media (max-width: 37.5rem) {
    left: 15rem;
  }

  @media (max-width: 30rem) {
    position: relative;
    display: block;
    left: 0;
    padding: 0.5rem;
    bottom: 0;
  }
`;

const Clouds = styled.figure`
  display: inline-block;
  padding: 1.5rem;
  position: absolute;
  right: 0;
  bottom: 1rem;

  @media (max-width: 30rem) {
    position: relative;
    display: block;
    left: 0;
    padding: 0.5rem;
    bottom: 0;
  }
`;

const Day = ({ results }) => {
  const clouds = results.weather[0];
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const getDayName = (timeStamp) => {
    const day = new Date(timeStamp * 1000);
    const dayName = days[day.getDay()];
    return dayName;
  };

  const getSrc = (icon) => {
    return `http://openweathermap.org/img/wn/${icon}.png`;
  };

  return (
    <Wrapper>
      <CurrentDay>{getDayName(results.dt)}</CurrentDay>
      <Temp>
        {Math.round(results.main.temp)}
        <sup>°</sup>
      </Temp>
      <Clouds>
        <img src={getSrc(clouds.icon)} alt={clouds.description} />
        <figcaption>{clouds.description}</figcaption>
      </Clouds>
    </Wrapper>
  );
};

export default Day;
