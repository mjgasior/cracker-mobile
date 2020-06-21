import React from "react";
import { View, Text, Button } from "react-native";
import { Arrow } from "../+components/Arrow";

export const DetailsScreen = ({ navigation, route }) => {
  const { description, name } = route.params;

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>{name}</Text>
      <Arrow radians={0} />
      <Text>{description.polish}</Text>
      <Text>{description.english}</Text>
      <Button title="Go back" onPress={navigation.goBack} />
    </View>
  );
};
