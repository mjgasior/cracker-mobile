import React, { useState } from "react";
import { View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Container } from "./+components/Container";
import { Logo } from "./+components/Logo";
import { useMarkers } from "./+hooks/useMarkers";
import {
  getDistanceFromLatLonInKm,
  getAngleInRadians,
  rad2deg,
} from "./+utils/distance";
import { useLocation } from "./+hooks/useLocation";
import { Marker } from "./+components/Marker";
import { PositionBar } from "./+components/PositionBar";

export const MarkersScreen = () => {
  const [isPositionBar, setIsPositionBar] = useState(true);
  const { data } = useMarkers();
  const location = useLocation();

  const onScroll = (e) => {
    const yOffset = e.nativeEvent.contentOffset.y;
    if (yOffset > 30 && isPositionBar) {
      setIsPositionBar(false);
      return;
    }

    if (yOffset < 20 && !isPositionBar) {
      setIsPositionBar(true);
    }
  };

  const canShowMarkers = location && data && data.markers.length > 0;
  return (
    <Container>
      <Logo />
      <ScrollView
        onScroll={onScroll}
        contentContainerStyle={{ paddingBottom: 50 }}
      >
        <View>
          {canShowMarkers &&
            data.markers.map(({ latitude, longitude }, i) => {
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
                  distance={distance}
                  angle={angle}
                  heading={rad2deg(location.coords.heading)}
                />
              );
            })}
        </View>
      </ScrollView>
      {location && <PositionBar location={location} isHidden={isPositionBar} />}
    </Container>
  );
};

MarkersScreen.navigationOptions = {
  header: null,
};