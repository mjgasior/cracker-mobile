import React from "react";
import Constants from "expo-constants";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

export const ApolloWrapper = ({ children }) => {
  const client = new ApolloClient({
    uri: `https://${Constants.manifest.extra.apiAddress}/api`,
    cache: new InMemoryCache(),
  });

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};
