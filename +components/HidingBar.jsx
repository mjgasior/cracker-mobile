import React, { useState, useEffect } from "react";
import { Platform, StyleSheet, Animated } from "react-native";

export const HidingBar = ({ children, isHidden }) => {
  const [hideAnimation] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(hideAnimation, {
      useNativeDriver: false,
      toValue: isHidden ? 0 : -100,
      duration: 500,
    }).start();
  }, [isHidden, hideAnimation]);

  return (
    <Animated.View
      style={[
        styles.tabBarInfoContainer,
        {
          bottom: hideAnimation,
        },
      ]}
    >
      {children}
    </Animated.View>
  );
};

const styles = StyleSheet.create({
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
