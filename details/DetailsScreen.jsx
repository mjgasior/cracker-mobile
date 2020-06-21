import React from "react";
import { View, Button } from "react-native";
import { Arrow } from "../+components/Arrow";
import {
  formatToDegrees,
  formatDistance,
  getDistanceFromLatLonInKm,
  getAngleInRadians,
  rad2deg,
} from "../+utils/distanceCalculator";
import { StyledText } from "../+components/StyledText";
import { useLocation } from "../+hooks/useLocation";
import styled from "styled-components/native";

const TextBlock = styled.Text`
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const DetailsScreen = ({ navigation, route }) => {
  const location = useLocation();
  const { latitude, longitude, description, name } = route.params;

  if (location) {
    const distance = getDistanceFromLatLonInKm(
      location.coords.latitude,
      location.coords.longitude,
      latitude,
      longitude
    );

    const angle = getAngleInRadians(
      latitude,
      longitude,
      location.coords.latitude,
      location.coords.longitude
    );

    const formattedDistance = formatDistance(distance);
    const transposedAngle = angle + rad2deg(location.coords.heading);
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <TextBlock>{name}</TextBlock>
        <Arrow radians={angle} />
        <StyledText>
          This marker is {formattedDistance} away ({formatToDegrees(angle)}).
        </StyledText>
        <Arrow radians={transposedAngle} />
        <TextBlock>{description.polish}</TextBlock>
        <TextBlock>{description.english}</TextBlock>
        <Button title="Go back" onPress={navigation.goBack} />
      </View>
    );
  }
  return null;
};
