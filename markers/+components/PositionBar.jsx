import React, { useState, useEffect } from "react";
import { Platform, StyleSheet, View, Animated } from "react-native";
import { StyledText } from "../../+components/StyledText";
import { deg2rad } from "../+utils/distance";

export const PositionBar = ({ location, isHidden }) => {
  const [hideAnimation] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(hideAnimation, {
      toValue: isHidden ? 0 : -100,
      duration: 500,
    }).start();
  }, [isHidden]);

  return (
    <Animated.View
      style={[
        styles.tabBarInfoContainer,
        {
          bottom: hideAnimation,
        },
      ]}
    >
      <Animated.View
        style={{
          transform: [
            { rotateZ: -deg2rad(location.coords.heading) },
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
    </Animated.View>
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
