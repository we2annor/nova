import React, { useEffect, useState } from "react";
import axios from "axios";
import Day from "./Day";
import Error from "./Error";
import Loading from "./Loading";
import { KEY } from "../axios/api";

const Days = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [results, setResults] = useState([]);
  const api = `https://api.openweathermap.org/data/2.5/forecast?q=London,uk&units=metric&appid=${KEY}`;

  useEffect(() => {
    fetchAPI(api);
  }, [api]);

  const fetchAPI = async (api) => {
    try {
      const result = await axios.get(api);
      setLoading(true);
      setResults(result.data.list);
    } catch (err) {
      setError(err);
      setLoading(true);
      setResults([]);
    }
  };

  useEffect(() => {
    const setIntervalId = setInterval(() => fetchAPI(api), 60000);
    return () => clearInterval(setIntervalId);
  }, [api]);

  if (!loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  const forecast = results.map((result, index) => (
    <div key={index}>
      <Day results={result} />
    </div>
  ));

  return <div>{forecast}</div>;
};

export default Days;
