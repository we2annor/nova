import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import ProgressBar from "./ProgressBar";
import Loading from "./Loading";
import Error from "./Error";
import { KEY } from "../axios/api";

const Wrapper = styled.div`
  background-color: #2d2d2d;
  color: #f8f8f8;
  padding: 4rem 2rem 1rem 2rem;
  text-align: left;

  @media (max-width: 30rem) {
    padding: 2rem;
  }
`;

const WeatherInfo = styled.section`
  width: 100%;
  height: 10rem;
  display: block;
  padding: 1rem 0 2rem 0;
  margin-bottom: 4rem;
  position: relative;

  @media (max-width: 30rem) {
    height: 20rem;
  }
`;

const CityName = styled.article`
  display: inline-block;
  width: 10vw;
  padding: 0.8rem 0;
  font-weight: bold;
  font-size: 2.6rem;
  position: absolute;
  left: 0;

  @media (max-width: 30rem) {
    position: relative;
    text-align: center;
    width: 100%;
    padding: 0;
  }
`;

const Temp = styled.article`
  width: 10vw;
  text-align: right;
  display: inline-block;
  padding: 0;
  right: 1rem;
  position: absolute;
  font-size: 6rem;

  @media (max-width: 37.5rem) {
    right: 1rem;
    text-align: center;
    width: 14vw;
  }

  @media (max-width: 30rem) {
    position: relative;
    width: 100%;
    text-align: center;
    display: block;
  }
`;

const CurrentTime = styled.article`
  border: 2px solid #181818;
  display: inline-block;
  border-radius: 1rem;
  width: 20vw;
  text-align: center;
  font-size: 1.8rem;
  font-weight: bold;
  margin: 0 auto;
  padding: 0.8rem 0;
  position: absolute;
  left: 50%;
  transform: translate(-50%);

  @media (max-width: 30rem) {
    position: relative;
    left: 0;
    margin: 1.2rem 0 0 0;
    width: 100%;
    transform: translate(0);
    display: block;
    padding: 2rem 0;
    font-size: 1.4rem;
    border: none;
  }
`;

const CurrentWeather = () => {
  const [completed, setCompleted] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [resultsMain, setResultsMain] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [results, setResults] = useState([]);
  const api = `https://api.openweathermap.org/data/2.5/weather?q=London,uk&units=metric&appid=${KEY}`;
  const resetCompleted = () => (completed > 60 ? setCompleted(0) : "");

  const getCurrentTime = () => {
    const currentDate = new Date();
    const currentTime = `${currentDate.getHours()}:${currentDate.getMinutes()} GMT`;
    return currentTime;
  };

  const fetchAPI = async (api) => {
    try {
      const result = await axios.get(api);
      setLoading(true);
      setResults(result.data);
      setResultsMain(result.data.main);
    } catch (err) {
      setError(err);
      setLoading(true);
      setResults([]);
      setResultsMain({});
    }
  };

  useEffect(() => {
    fetchAPI(api);
  }, [api]);

  useEffect(() => {
    const setIntervalId = setInterval(() => fetchAPI(api), 60000);
    return () => clearInterval(setIntervalId);
  }, [api]);

  useEffect(() => {
    const setIntervalId = setInterval(() => {
      setCompleted((comp) => comp + 1);
      setCurrentTime(getCurrentTime);
    }, 1000);
    return () => clearInterval(setIntervalId);
  }, []);

  if (!loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  resetCompleted();
  return (
    <Wrapper>
      <WeatherInfo>
        <CityName>
          <h1>{results.name}</h1>
        </CityName>
        <CurrentTime>{currentTime}</CurrentTime>
        <Temp>
          {Math.round(resultsMain.temp)}
          <sup>°</sup>
        </Temp>
      </WeatherInfo>
      <ProgressBar completed={completed} />
    </Wrapper>
  );
};

export default CurrentWeather;
