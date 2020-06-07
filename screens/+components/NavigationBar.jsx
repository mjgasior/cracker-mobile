import React from "react";
import { Platform, StyleSheet, View, Animated } from "react-native";
import { StyledText } from "../../+components/StyledText";
import { Heading } from "./Heading";

export const NavigationBar = ({ location }) => {
  return (
    <View style={styles.tabBarInfoContainer}>
      <Animated.View
        style={{
          transform: [
            { rotateZ: -(location.coords.heading * Math.PI) / 180 },
            { perspective: 1000 },
          ],
        }}
      >
        <StyledText>↑</StyledText>
      </Animated.View>
      <StyledText>Your current location now:</StyledText>
      <View style={styles.codeHighlightContainer}>
        <StyledText>Latitude: {location.coords.latitude}</StyledText>
        <StyledText>Longitude: {location.coords.longitude}</StyledText>
        <StyledText>Heading: {location.coords.heading}</StyledText>
      </View>
      <Heading />
    </View>
  );
};

const styles = StyleSheet.create({
  codeHighlightContainer: {
    marginVertical: 7,
    backgroundColor: "rgba(0,0,0,0.05)",
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  tabBarInfoContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: "black",
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: "center",
    backgroundColor: "#fbfbfb",
    paddingVertical: 20,
  },
});
