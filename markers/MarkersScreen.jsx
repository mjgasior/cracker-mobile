import React, { useState, useCallback } from "react";
import { View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Container } from "./+components/Container";
import { Logo } from "./+components/Logo";
import { useMarkers } from "./+hooks/useMarkers";
import {
  getDistanceFromLatLonInKm,
  getAngleInRadians,
  rad2deg,
} from "./../+utils/distanceCalculator";
import { useLocation } from "./+hooks/useLocation";
import { Marker } from "./+components/Marker";
import { PositionBar } from "./+components/PositionBar";
import { ROUTES } from "./../+routing/";
import { useHidingBar } from "../+components/+hooks/useHidingBar";

export const MarkersScreen = ({ navigation }) => {
  const [isPositionBar, onScroll] = useHidingBar(30, 20);
  const { data } = useMarkers();
  const location = useLocation();

  const canShowMarkers = location && data && data.markers.length > 0;
  return (
    <Container>
      <Logo />
      <ScrollView
        onScroll={onScroll}
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        <View>
          {canShowMarkers &&
            data.markers.map((marker, i) => {
              const { latitude, longitude, name } = marker;
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

              return (
                <Marker
                  key={i}
                  name={name}
                  distance={distance}
                  angle={angle}
                  heading={rad2deg(location.coords.heading)}
                  onPress={() => navigation.navigate(ROUTES.DETAILS, marker)}
                />
              );
            })}
        </View>
      </ScrollView>
      {location && <PositionBar location={location} isHidden={isPositionBar} />}
    </Container>
  );
};
