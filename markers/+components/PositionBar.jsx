import React from "react";
import { Animated } from "react-native";
import { StyledText } from "../../+components/StyledText";
import { deg2rad } from "../../+utils/distanceCalculator";
import { HidingBar } from "./../../+components/HidingBar";
import styled from "styled-components/native";

const PositionView = styled.View`
  background-color: "rgba(0,0,0,0.05)";
  border-radius: 3px;
  margin-vertical: 7px;
  padding-horizontal: 4px;
`;

export const PositionBar = ({ location, isHidden }) => {
  return (
    <HidingBar isHidden={isHidden}>
      <Animated.View
        style={{
          transform: [
            { rotateZ: -deg2rad(location.coords.heading) },
            { perspective: 1000 },
          ],
        }}
      >
        <StyledText>↑</StyledText>
      </Animated.View>
      <StyledText>Your current location now:</StyledText>
      <PositionView>
        <StyledText>Latitude: {location.coords.latitude}</StyledText>
        <StyledText>Longitude: {location.coords.longitude}</StyledText>
        <StyledText>Heading: {location.coords.heading}</StyledText>
      </PositionView>
    </HidingBar>
  );
};
