import React from "react";
import styled from "styled-components";

const Container = styled.div`
  text-align: center;
  padding: 2rem 0;
  font-size: 3rem;
  font-color: #5c5c5c;
`;

const Error = () => {
  return <Container>Error occured. Please try again</Container>;
};

export default Error;
