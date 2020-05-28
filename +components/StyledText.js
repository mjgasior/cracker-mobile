import * as React from "react";
import { Text } from "react-native";

export const StyledText = (props) => (
  <Text {...props} style={[props.style, { fontFamily: "space-mono" }]} />
);
