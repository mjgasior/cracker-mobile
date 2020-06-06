import React from "react";
import { View } from "react-native";
import { Container } from "./+components/Container";
import { Logo } from "./+components/Logo";
import { useMarkers } from "./+hooks/useMarkers";
import { getDistanceFromLatLonInKm } from "./+utils/distance";
import { StyledText } from "../+components/StyledText";
import { useLoc } from "./+hooks/useLoc";

export const MarkersScreen = () => {
  const { data } = useMarkers();
  const location = useLoc();

  const canShowMarkers = data && data.markers.length > 0;
  return (
    <Container>
      <Logo />

      <View>
        {canShowMarkers &&
          data.markers.map(({ position }, i) => {
            const distance = getDistanceFromLatLonInKm(
              51,
              20,
              position[0],
              position[1]
            );

            return <StyledText key={i}>Markers {distance}</StyledText>;
          })}
        {location && (
          <>
            <StyledText>Latitude: {location.coords.latitude}</StyledText>
            <StyledText>Longitude: {location.coords.longitude}</StyledText>
            <StyledText>Heading: {location.coords.heading}</StyledText>
          </>
        )}
      </View>
    </Container>
  );
};

MarkersScreen.navigationOptions = {
  header: null,
};
