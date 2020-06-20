import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { client, ApolloProvider } from "./+utils/apolloSetup";

import { useCachedResources } from "./+hooks/useCachedResources";
import { MarkersScreen } from "./markers/MarkersScreen";
import { DetailsScreen } from "./details/DetailsScreen";

const Stack = createStackNavigator();

export default function App() {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <ApolloProvider client={client}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Details">
            <Stack.Screen name="Home" component={MarkersScreen} />
            <Stack.Screen name="Details" component={DetailsScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </ApolloProvider>
    );
  }
}
