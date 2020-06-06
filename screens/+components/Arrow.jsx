import React, { useState, useEffect } from "react";
import { View, Text, Animated } from "react-native";

export const Arrow = ({ degree }) => {
  const [fadeAnim] = useState(new Animated.Value(0));

  const adjustedAngle = adjustArrowAngleToStartAsRightArrow(degree);

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
        transform: [{ rotateZ: adjustedAngle }, { perspective: 1000 }],
      }}
    >
      <View>
        <Text>↑</Text>
      </View>
    </Animated.View>
  );
};

function adjustArrowAngleToStartAsRightArrow(radians) {
  return radians - Math.PI / 2;
}
