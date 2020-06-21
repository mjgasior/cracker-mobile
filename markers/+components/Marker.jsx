import * as React from "react";
import { Button } from "react-native";
import { StyledText } from "../../+components/StyledText";
import { Arrow } from "./../../+components/Arrow";
import styled from "styled-components/native";
import {
  formatDistance,
  formatToDegrees,
} from "./../../+utils/distanceCalculator";

const MarkerContainer = styled.View`
  margin-top: 5px;
  margin-bottom: 5px;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 3px;
`;

export const Marker = ({ name, distance, angle, heading, onPress }) => {
  const formattedDistance = formatDistance(distance);

  const transposedAngle = heading + angle;
  return (
    <MarkerContainer>
      <Arrow radians={angle} />
      <StyledText>{name}</StyledText>
      <StyledText>
        This marker is {formattedDistance} away ({formatToDegrees(angle)}).
      </StyledText>
      <Arrow radians={transposedAngle} />
      <Button title="Show" onPress={onPress} />
    </MarkerContainer>
  );
};
