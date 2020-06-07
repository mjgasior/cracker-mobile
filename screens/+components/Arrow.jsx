import React, { useState, useEffect } from "react";
import { View, Text, Animated } from "react-native";

export const Arrow = ({ radians }) => {
  const [fadeAnim] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 10000,
    }).start();
  }, []);

  return (
    <Animated.View
      style={{
        opacity: fadeAnim,
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
