import React, { useState, useEffect } from "react";
import { View, Text, Animated } from "react-native";

export const Arrow = () => {
  const [fadeAnim] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 10000,
    }).start();
  }, []);

  return (
    <Animated.View // Special animatable View
      style={{
        opacity: fadeAnim, // Bind opacity to animated value
      }}
    >
      <View>
        <Text>Arrow</Text>
      </View>
    </Animated.View>
  );
};
