import * as React from "react";
import { StyleSheet, View } from "react-native";
import { client, ApolloProvider } from "./+utils/apolloSetup";

import { useCachedResources } from "./+hooks/useCachedResources";
import { MarkersScreen } from "./screens/MarkersScreen";

export default function App() {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <ApolloProvider client={client}>
        <View style={styles.container}>
          <MarkersScreen />
        </View>
      </ApolloProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
