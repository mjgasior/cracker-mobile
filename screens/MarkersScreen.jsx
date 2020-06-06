import React from "react";
import { Text, View } from "react-native";
import { Container } from "./+components/Container";

export const MarkersScreen = () => {
  return (
    <Container>
      <Text>Markers</Text>
    </Container>
  );
};

MarkersScreen.navigationOptions = {
  header: null,
};
