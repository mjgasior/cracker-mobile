import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import {
  formatDistance,
  getDistanceFromLatLonInKm,
} from "../+utils/distanceCalculator";
import { StyledText } from "../+components/StyledText";
import { useLocation } from "../+hooks/useLocation";
import styled from "styled-components/native";
import { Container } from "./+components/Container";
import { NavigatorBar } from "./+components/NavigatorBar";
import { useHidingBar } from "./../+components/+hooks/useHidingBar";
import { Loader } from "../+components/Loader";

const TextBlock = styled.Text`
  padding: 10px;
`;

export const DetailsScreen = ({ route }) => {
  const [isNavigationBar, onScroll] = useHidingBar(30, 20);
  const location = useLocation();
  const { latitude, longitude, english, polish } = route.params;

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
      <Container>
        <ScrollView
          contentContainerStyle={{ paddingBottom: 200 }}
          onScroll={onScroll}
        >
          <StyledText>This marker is {formattedDistance} away.</StyledText>
          <TextBlock>{polish.description}</TextBlock>
          <TextBlock>{english.description}</TextBlock>
        </ScrollView>
        <NavigatorBar
          initialRegion={{
            latitude: latitude - latitudeDelta * 0.5,
            longitude: longitude - longitudeDelta * 0.5,
            latitudeDelta: Math.abs(latitudeDelta) * 2,
            longitudeDelta: Math.abs(longitudeDelta) * 2,
          }}
          coordinate={{ latitude, longitude }}
          name={english.name}
          isHidden={isNavigationBar}
        />
      </Container>
    );
  }
  return <Loader />;
};
