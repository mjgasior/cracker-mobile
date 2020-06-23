import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
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

import MapView, { Marker } from "react-native-maps";

const TextBlock = styled.Text`
  padding: 10px;
`;

export const DetailsScreen = ({ route }) => {
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
        <Arrow radians={angle} />
        <StyledText>
          This marker is {formattedDistance} away ({formatToDegrees(angle)}).
        </StyledText>
        <Arrow radians={transposedAngle} />
        <TextBlock>{description.polish}</TextBlock>
        <TextBlock>{description.english}</TextBlock>
        <MapView
          style={styles.mapStyle}
          initialRegion={{
            latitude,
            longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          <Marker
            coordinate={{ latitude, longitude }}
            title={name}
            description="Desctiption"
          />
          <Marker
            coordinate={{
              latitude: location.coords.latitude,
              longitude: location.coords.longitude,
            }}
            title="You are here"
            description="Desctiption"
          />
        </MapView>
      </View>
    );
  }
  return null;
};

const styles = StyleSheet.create({
  mapStyle: {
    width: Dimensions.get("window").width,
    height: 200,
  },
});
