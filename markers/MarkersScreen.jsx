import React from "react";
import { View } from "react-native";
import { Container } from "./+components/Container";
import { useMarkers } from "./+hooks/useMarkers";
import { Marker } from "./+components/Marker";
import { ROUTES } from "./../+routing/";
import { Loader } from "./../+components/Loader";
import { AuthorizationButton } from "./+components/AuthorizationButton";

export const MarkersScreen = ({ navigation }) => {
  const { data } = useMarkers();

  const canShowMarkers = data && data.markers.length > 0;
  if (canShowMarkers) {
    return (
      <Container>
        <View>
          <AuthorizationButton />
          {canShowMarkers &&
            data.markers.map((marker, i) => {
              const { english } = marker;
              return (
                <Marker
                  key={i}
                  name={english.name}
                  distance={0}
                  onPress={() => navigation.navigate(ROUTES.DETAILS, marker)}
                />
              );
            })}
        </View>
      </Container>
    );
  }
  return <Loader />;
};
