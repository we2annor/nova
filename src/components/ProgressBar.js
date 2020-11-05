import React from "react";
import styled from "styled-components";

const BarContainer = styled.div`
  width: 100%;
  height: 1.5rem;
  margin: 0 auto;
  box-sizing: border-box;
`;

const Background = styled.div`
  background-color: #3d3d3d;
  border: 1px solid #2c2c2c;
  width: 100%;
  height: 100%;
  border-radius: 20px;
  position: relative;
`;

const ReadingsMessage = styled.span`
  position: absolute;
  top: -2.5rem;
  left: 0;
  font-size: 1.5rem;
  color: #ffffff;

  @media (max-width: 30rem) {
    font-size: 1.2rem;
  }
`;

const Bar = styled.span`
  display: block;
  border-radius: inherit;
  box-sizing: inherit;
  background-color: gold;
  height: 100%;
  width: 0;
  line-height: 1.3rem;
  font-size: 1.4rem;
  font-weight: bold;
  text-align: center;
  transition: width 1s linear;
  position: absolute;
  color: red;
  top: 0;
  left: 0;
`;

const getCompletedPercentage = (completed) => {
  return Math.round((completed / 60) * 100);
};

const ProgressBar = ({ completed }) => {
  const minBeforeReloading = `Reloading in  ${60 - completed}s`;
  return (
    <BarContainer>
      <Background>
        <ReadingsMessage>{minBeforeReloading}</ReadingsMessage>
        <Bar
          style={{ width: `${getCompletedPercentage(completed)}%` }}
        >{`${getCompletedPercentage(completed)}%`}</Bar>
      </Background>
    </BarContainer>
  );
};

export default ProgressBar;
