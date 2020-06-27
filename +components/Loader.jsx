import React, { useState, useEffect } from "react";
import { Easing, Animated } from "react-native";
import styled from "styled-components/native";

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding-bottom: 50px;
`;

const StyledImage = styled.Image`
  width: 150px;
  height: 150px;
  resize-mode: contain;
`;

export const Loader = () => {
  const [pulseAnimation] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.delay(250),
        Animated.timing(pulseAnimation, {
          toValue: 1,
          duration: 1000,
          easing: Easing.linear,
        }),
        Animated.timing(pulseAnimation, {
          toValue: 0.25,
          duration: 1000,
          easing: Easing.cubic,
        }),
      ]),
      -1
    ).start();
  }, []);

  return (
    <Container>
      <Animated.View
        style={[
          {
            opacity: pulseAnimation,
          },
        ]}
      >
        <StyledImage source={require("../+assets/images/cracker-logo.png")} />
      </Animated.View>
    </Container>
  );
};
