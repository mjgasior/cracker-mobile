import React, { useState, useCallback } from "react";
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

const TextBlock = styled.Text`
  padding: 10px;
`;

export const DetailsScreen = ({ route }) => {
  const [isNavigationBar, setIsNavigationBar] = useState(true);
  const location = useLocation();
  const { latitude, longitude, description, name } = route.params;

  const onScroll = useCallback(
    (e) => {
      const yOffset = e.nativeEvent.contentOffset.y;
      if (yOffset > 30 && isNavigationBar) {
        setIsNavigationBar(false);
        return;
      }

      if (yOffset < 20 && !isNavigationBar) {
        setIsNavigationBar(true);
      }
    },
    [setIsNavigationBar, isNavigationBar]
  );

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
          contentContainerStyle={{ paddingBottom: 100 }}
          onScroll={onScroll}
        >
          <StyledText>This marker is {formattedDistance} away.</StyledText>
          <TextBlock>{description.polish}</TextBlock>
          <TextBlock>{description.english}</TextBlock>
        </ScrollView>
        <NavigatorBar
          initialRegion={{
            latitude: latitude - latitudeDelta * 0.5,
            longitude: longitude - longitudeDelta * 0.5,
            latitudeDelta: Math.abs(latitudeDelta) * 2,
            longitudeDelta: Math.abs(longitudeDelta) * 2,
          }}
          coordinate={{ latitude, longitude }}
          name={name}
          isHidden={isNavigationBar}
        />
      </Container>
    );
  }
  return null;
};
