import React, { useState, useEffect } from "react";
import styled from "styled-components/native";
import { Pedometer } from "expo-sensors";

const Container = styled.View`
  text-align: center;
  justify-content: center;
  align-items: center;
  margin-top: 80px;
  margin-bottom: 50px;
`;

const CountedStepsText = styled.Text`
  font-size: 120px;
  color: #94ed8a;
  font-weight: bold;
`;

const Text = styled.Text`
  font-size: 28px;
  color: #94ed8a;
  text-transform: uppercase;
`;

export const StepCounter = () => {
  const [countSteps, setCountSteps] = useState(0);

  useEffect(() => {
    Pedometer.watchStepCount((result) => {
      setCountSteps(result.steps);
    });
  });

  return (
    <Container>
      <CountedStepsText>{countSteps}</CountedStepsText>
      <Text>steps</Text>
    </Container>
  );
};