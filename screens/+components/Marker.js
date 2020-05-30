import * as React from "react";
import { View } from "react-native";
import styled from "styled-components/native";
import { StyledText } from "../../+components/StyledText";

const RotatedBox = styled.View`
  transform: rotate(90deg);
  font-variant: small-caps;
  background: #ffd42a;
  width: 17px;
  height: 17px;
  border: 0px solid #0f4c81;
  border-top-width: 3px;
  border-left-width: 3px;
`;

export const Marker = ({ distance }) => {
  const formattedDistance = formatDistance(distance);
  return (
    <View style={{ marginTop: 10 }}>
      <RotatedBox />
      <StyledText>This marker is {formattedDistance} from you.</StyledText>
    </View>
  );
};

const formatDistance = (distance) => {
  if (distance < 1) {
    const meters = Math.ceil(distance * 1000);
    return `${meters} meters`;
  }
  return `${distance} kilometers`;
};
