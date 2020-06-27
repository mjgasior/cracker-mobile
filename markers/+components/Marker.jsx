import * as React from "react";
import { TouchableOpacity } from "react-native";
import { StyledText } from "../../+components/StyledText";
import styled from "styled-components/native";
import { formatDistance } from "./../../+utils/distanceCalculator";

const MarkerContainer = styled.View`
  margin-top: 5px;
  margin-bottom: 5px;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 3px;
`;

export const Marker = ({ name, distance, angle, onPress }) => {
  const formattedDistance = formatDistance(distance);
  return (
    <TouchableOpacity onPress={onPress}>
      <MarkerContainer>
        <StyledText>{name}</StyledText>
        <StyledText>This marker is {formattedDistance} away.</StyledText>
      </MarkerContainer>
    </TouchableOpacity>
  );
};
