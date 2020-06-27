import React from "react";
import { StyledText } from "../../+components/StyledText";
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
      <StyledText>Your current location now:</StyledText>
      <PositionView>
        <StyledText>Latitude: {location.coords.latitude}</StyledText>
        <StyledText>Longitude: {location.coords.longitude}</StyledText>
        <StyledText>Heading: {location.coords.heading}</StyledText>
      </PositionView>
    </HidingBar>
  );
};
