import React from "react";
import { View, Text, Animated } from "react-native";
import { useHeading } from "../+hooks/useHeading";
import { StyledText } from "../../+components/StyledText";

export const Heading = () => {
  const heading = useHeading();

  return (
    <>
      <Animated.View
        style={{
          transform: [
            { rotateZ: (heading.trueHeading * Math.PI) / 180 },
            { perspective: 1000 },
          ],
        }}
      >
        <View>
          <Text>↑</Text>
        </View>
      </Animated.View>
      <StyledText>Heading: {heading.trueHeading}</StyledText>
    </>
  );
};
