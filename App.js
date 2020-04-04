import React from "react";
import { Platform, StatusBar, StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import BottomTabNavigator from "./navigation/BottomTabNavigator";
import { useFirebase } from "./useFirebase";
import { useInitialize } from "./useInitialize";

import { Container, Form, Item, Label, Header, Content } from "native-base";

const Stack = createStackNavigator();

export default function App(props) {
  useFirebase();
  const {
    containerRef,
    isLoadingComplete,
    initialNavigationState
  } = useInitialize();

  if (!isLoadingComplete && !props.skipLoadingScreen) {
    return null;
  } else {
    return (
      <Container>
        <Header />
        <Content>
          <Form>
            <Item>
              <Label>Email:</Label>
            </Item>
          </Form>
        </Content>
      </Container>
    );
  }

  /*if (!isLoadingComplete && !props.skipLoadingScreen) {
    return null;
  } else {
    return (
      <View style={styles.container}>
        {Platform.OS === "ios" && <StatusBar barStyle="default" />}
        <NavigationContainer
          ref={containerRef}
          initialState={initialNavigationState}
        >
          <Stack.Navigator>
            <Stack.Screen name="Root" component={BottomTabNavigator} />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    );
  }*/
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
});
