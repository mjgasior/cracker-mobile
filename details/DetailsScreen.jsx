import React from "react";
import { View, Text, Button } from "react-native";

export const DetailsScreen = ({ navigation, route }) => {
  const { description } = route.params;

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Details Screen</Text>
      <Text>{description.polish}</Text>
      <Text>{description.english}</Text>
      <Button title="Go back" onPress={navigation.goBack} />
    </View>
  );
};
