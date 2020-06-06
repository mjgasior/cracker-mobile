import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import * as React from "react";

import { TabBarIcon } from "../+components/TabBarIcon";
import HomeScreen from "../screens/HomeScreen";
import { MarkersScreen } from "../screens/MarkersScreen";
import { getHeaderTitle, getInitialRoute } from "./utils";

const BottomTab = createBottomTabNavigator();

export const BottomTabNavigator = ({ navigation, route }) => {
  // Set the header title on the parent stack navigator depending on the
  // currently active tab. Learn more in the documentation:
  // https://reactnavigation.org/docs/en/screen-options-resolution.html
  navigation.setOptions({ headerTitle: getHeaderTitle(route) });

  return (
    <BottomTab.Navigator initialRouteName={getInitialRoute()}>
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: "Cracker!",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} name="md-code-working" />
          ),
        }}
      />
      <BottomTab.Screen
        name="Markers"
        component={MarkersScreen}
        options={{
          title: "Cracker markers!",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} name="md-compass" />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
};
