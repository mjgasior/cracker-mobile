import React from "react";
import { Card, CardItem, Body, Text } from "native-base";

export const RegistrationScreen = () => {
  return (
    <Card>
      <CardItem header>
        <Text>NativeBase</Text>
      </CardItem>
      <CardItem>
        <Body>
          <Text>//Your text here</Text>
        </Body>
      </CardItem>
      <CardItem footer>
        <Text>GeekyAnts</Text>
      </CardItem>
    </Card>
  );
};
