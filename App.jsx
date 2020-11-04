import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { useCachedResources } from "./+hooks/useCachedResources";
import { MarkersScreen } from "./markers/MarkersScreen";
import { DetailsScreen } from "./details/DetailsScreen";
import { ROUTES } from "./+routing";
import { ApolloWrapper } from "./+components/CrackerApolloWrapper2";
import { Auth0Wrapper } from "./+components/Auth0Wrapper";

const Stack = createStackNavigator();

export default function App() {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <Auth0Wrapper>
        <ApolloWrapper>
          <NavigationContainer>
            <Stack.Navigator initialRouteName={ROUTES.MARKERS}>
              <Stack.Screen name={ROUTES.MARKERS} component={MarkersScreen} />
              <Stack.Screen
                name={ROUTES.DETAILS}
                component={DetailsScreen}
                options={({ route }) => ({ title: route.params.english.name })}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </ApolloWrapper>
      </Auth0Wrapper>
    );
  }
}
