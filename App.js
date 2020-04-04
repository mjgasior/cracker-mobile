import React, { createContext } from "react";
import { Platform, StatusBar, StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import BottomTabNavigator from "./navigation/BottomTabNavigator";
import { useFirebase } from "./+hooks/useFirebase";
import { useInitialize } from "./+hooks/useInitialize";

import MainScreen from "./screens/MainScreen";

const Stack = createStackNavigator();

const UserContext = createContext();

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
      <UserContext.Provider>
        <MainScreen
          containerRef={containerRef}
          initialNavigationState={initialNavigationState}
        />
      </UserContext.Provider>
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
