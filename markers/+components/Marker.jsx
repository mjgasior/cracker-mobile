import * as React from "react";
import { View } from "react-native";
import { StyledText } from "../../+components/StyledText";
import { Arrow } from "./Arrow";
import { rad2deg } from "../+utils/distance";
import styled from "styled-components/native";

const MarkerContainer = styled.View`
  margin-top: 5px;
  margin-bottom: 5px;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 3px;
`;

export const Marker = ({ distance, angle, heading }) => {
  const formattedDistance = formatDistance(distance);
  const transposedAngle = heading + angle;
  return (
    <MarkerContainer>
      <Arrow radians={angle} />
      <StyledText>
        This marker is {formattedDistance} away ({formatToDegrees(angle)}).
      </StyledText>
      <Arrow radians={transposedAngle} />
    </MarkerContainer>
  );
};

const formatDistance = (distance) => {
  if (distance < 1) {
    const meters = Math.ceil(distance * 1000);
    return `${meters} m`;
  }
  return `${distance.toPrecision(3)} km`;
};

const formatToDegrees = (radians) => {
  const degrees = rad2deg(radians);
  return `${degrees.toPrecision(3)}°`;
};
