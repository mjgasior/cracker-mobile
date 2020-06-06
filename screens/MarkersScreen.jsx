import React from "react";
import { View, Text } from "react-native";
import { Container } from "./+components/Container";
import { Logo } from "./+components/Logo";
import { useMarkers } from "./+hooks/useMarkers";
import { getDistanceFromLatLonInKm, getAngle } from "./+utils/distance";
import { useLoc } from "./+hooks/useLoc";
import { Marker } from "./+components/Marker";
import { NavigationBar } from "./+components/NavigationBar";

export const MarkersScreen = () => {
  const { data } = useMarkers();
  const location = useLoc();

  const canShowMarkers = location && data && data.markers.length > 0;
  return (
    <Container>
      <Logo />

      <View>
        {canShowMarkers &&
          data.markers.map(({ position }, i) => {
            const distance = getDistanceFromLatLonInKm(
              location.coords.latitude,
              location.coords.longitude,
              position[0],
              position[1]
            );

            const angle = getAngle(
              position[0],
              position[1],
              location.coords.latitude,
              location.coords.longitude
            );

            return (
              <Marker
                key={i}
                distance={distance}
                angle={angle}
                heading={(location.coords.heading * Math.PI) / 180}
              />
            );
          })}
      </View>
      {location && <NavigationBar location={location} />}
    </Container>
  );
};

MarkersScreen.navigationOptions = {
  header: null,
};
