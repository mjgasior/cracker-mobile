import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import {
  formatDistance,
  getDistanceFromLatLonInKm,
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

    const formattedDistance = formatDistance(distance);

    const latitudeDelta = latitude - location.coords.latitude;
    const longitudeDelta = longitude - location.coords.longitude;
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <StyledText>This marker is {formattedDistance} away.</StyledText>
        <TextBlock>{description.polish}</TextBlock>
        <TextBlock>{description.english}</TextBlock>
        <MapView
          style={styles.mapStyle}
          initialRegion={{
            latitude: latitude - latitudeDelta * 0.5,
            longitude: longitude - longitudeDelta * 0.5,
            latitudeDelta: Math.abs(latitudeDelta) * 2,
            longitudeDelta: Math.abs(longitudeDelta) * 2,
          }}
          showsUserLocation={true}
        >
          <Marker
            coordinate={{ latitude, longitude }}
            title={name}
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
