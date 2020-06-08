import React from "react";
import { View, Text, Animated } from "react-native";

export const Arrow = ({ radians }) => {
  return (
    <Animated.View
      style={{
        transform: [
          { rotateZ: getCounterClockwise(radians) },
          { perspective: 1000 },
        ],
      }}
    >
      <View>
        <Text>↑</Text>
      </View>
    </Animated.View>
  );
};

function getCounterClockwise(rad) {
  return -rad;
}
