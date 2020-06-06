import React from "react";
import { Text, View } from "react-native";
import { Container } from "./+components/Container";
import { Logo } from "./+components/Logo";

export const MarkersScreen = () => {
  return (
    <Container>
      <Logo />
      <Text>Markers</Text>
    </Container>
  );
};

MarkersScreen.navigationOptions = {
  header: null,
};
