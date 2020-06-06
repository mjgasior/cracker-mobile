import * as React from "react";
import { View } from "react-native";
import { StyledText } from "../../+components/StyledText";
import { Arrow } from "./Arrow";

export const Marker = ({ distance, angle }) => {
  const formattedDistance = formatDistance(distance);
  return (
    <View
      style={{
        marginTop: 10,
        alignItems: "center",
        marginTop: 10,
        marginBottom: 20,
      }}
    >
      <Arrow degree={angle} />
      <StyledText>
        This marker is {formattedDistance} away ({formatRadians(angle)}°).
      </StyledText>
    </View>
  );
};

const formatDistance = (distance) => {
  if (distance < 1) {
    const meters = Math.ceil(distance * 1000);
    return `${meters} m`;
  }
  return `${distance.toPrecision(3)} km`;
};

const formatRadians = (radians) => {
  const degrees = (radians * 180) / Math.PI;
  return degrees.toPrecision(3);
};
