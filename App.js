import React from "react";
import { Platform, StatusBar, StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import BottomTabNavigator from "./navigation/BottomTabNavigator";
import { useFirebase } from "./useFirebase";
import { useInitialize } from "./useInitialize";

import {
  Container,
  Form,
  Item,
  Label,
  Header,
  Content,
  Input,
  Text,
  Button
} from "native-base";
import { useAuthorization } from "./useAuthorization";

const Stack = createStackNavigator();

export default function App(props) {
  useFirebase();
  const {
    containerRef,
    isLoadingComplete,
    initialNavigationState
  } = useInitialize();

  const { setPassword, setEmail, login, signUp } = useAuthorization();

  if (!isLoadingComplete && !props.skipLoadingScreen) {
    return null;
  } else {
    return (
      <Container>
        <Header>
          <Text>Cracker app</Text>
        </Header>
        <Content>
          <Form>
            <Item floatingLabel>
              <Label>Email:</Label>
              <Input
                autoCapitalize="none"
                autoCorrect={false}
                onChangeText={setEmail}
              />
            </Item>
            <Item floatingLabel>
              <Label>Password:</Label>
              <Input
                autoCapitalize="none"
                autoCorrect={false}
                secureTextEntry={true}
                onChangeText={setPassword}
              />
            </Item>
            <Button full rounded success onPress={login}>
              <Text>Login</Text>
            </Button>
            <Button full rounded primary onPress={signUp}>
              <Text>Sign up</Text>
            </Button>
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
