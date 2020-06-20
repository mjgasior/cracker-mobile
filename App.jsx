import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { client, ApolloProvider } from "./+utils/apolloSetup";

import { useCachedResources } from "./+hooks/useCachedResources";
import { MarkersScreen } from "./markers/MarkersScreen";
import { DetailsScreen } from "./details/DetailsScreen";
import { ROUTES } from "./+routing";

const Stack = createStackNavigator();

export default function App() {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <ApolloProvider client={client}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName={ROUTES.MARKERS}>
            <Stack.Screen name={ROUTES.MARKERS} component={MarkersScreen} />
            <Stack.Screen name={ROUTES.DETAILS} component={DetailsScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </ApolloProvider>
    );
  }
}
