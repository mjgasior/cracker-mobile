import * as React from "react";
import { StyledText } from "../../+components/StyledText";

export const Marker = ({ distance }) => {
  const formattedDistance = formatDistance(distance);
  return <StyledText>This marker is {formattedDistance} from you.</StyledText>;
};

const formatDistance = (distance) => {
  if (distance < 1) {
    const meters = Math.ceil(distance * 1000);
    return `${meters} meters`;
  }
  return `${distance} kilometers`;
};
