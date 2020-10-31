import React from "react";
import { View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Container } from "./+components/Container";
import { Logo } from "./+components/Logo";
import { useMarkers } from "./+hooks/useMarkers";
import { getDistanceFromLatLonInKm } from "./../+utils/distanceCalculator";
import { useLocation } from "./+hooks/useLocation";
import { Marker } from "./+components/Marker";
import { PositionBar } from "./+components/PositionBar";
import { ROUTES } from "./../+routing/";
import { useHidingBar } from "../+components/+hooks/useHidingBar";
import { Loader } from "./../+components/Loader";

export const MarkersScreen = ({ navigation }) => {
  const [isPositionBar, onScroll] = useHidingBar(30, 20);
  const { data } = useMarkers();
  const location = useLocation();

  const canShowMarkers = location && data && data.markers.length > 0;
  if (canShowMarkers) {
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
                const { latitude, longitude, english } = marker;
                const distance = getDistanceFromLatLonInKm(
                  location.coords.latitude,
                  location.coords.longitude,
                  latitude,
                  longitude
                );

                return (
                  <Marker
                    key={i}
                    name={english.name}
                    distance={distance}
                    onPress={() => navigation.navigate(ROUTES.DETAILS, marker)}
                  />
                );
              })}
          </View>
        </ScrollView>
        <PositionBar location={location} isHidden={isPositionBar} />
      </Container>
    );
  }
  return <Loader />;
};
