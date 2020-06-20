import React from "react";
import { View, Text, Animated } from "react-native";
import { useHeading } from "../+hooks/useHeading";
import { StyledText } from "../../+components/StyledText";
import { deg2rad } from "../+utils/distance";

export const Heading = () => {
  const heading = useHeading();

  if (heading) {
    const radianAngle = -deg2rad(heading.trueHeading);
    return (
      <>
        <Animated.View
          style={{
            transform: [{ rotateZ: radianAngle }, { perspective: 1000 }],
          }}
        >
          <View>
            <Text>↑</Text>
          </View>
        </Animated.View>
        <StyledText>Heading: {heading.trueHeading}</StyledText>
      </>
    );
  }
  return null;
};
