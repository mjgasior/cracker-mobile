import React, { useState } from "react";
import { View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Container } from "./+components/Container";
import { Logo } from "./+components/Logo";
import { useMarkers } from "./+hooks/useMarkers";
import {
  getDistanceFromLatLonInKm,
  getAngle as getAngleInRadians,
} from "./+utils/distance";
import { useLocation } from "./+hooks/useLocation";
import { Marker } from "./+components/Marker";
import { NavigationBar } from "./+components/NavigationBar";

export const MarkersScreen = () => {
  const [isNavigationBar, setIsNavigationBar] = useState(true);
  const { data } = useMarkers();
  const location = useLocation();

  const onScroll = (e) => {
    const yOffset = e.nativeEvent.contentOffset.y;
    if (yOffset > 40 && isNavigationBar) {
      setIsNavigationBar(false);
      return;
    }

    if (yOffset < 30 && !isNavigationBar) {
      setIsNavigationBar(true);
    }
  };

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
            data.markers.map(({ position }, i) => {
              const distance = getDistanceFromLatLonInKm(
                location.coords.latitude,
                location.coords.longitude,
                position[0],
                position[1]
              );

              const angle = getAngleInRadians(
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
      </ScrollView>
      {location && (
        <NavigationBar location={location} isHidden={isNavigationBar} />
      )}
    </Container>
  );
};

MarkersScreen.navigationOptions = {
  header: null,
};
