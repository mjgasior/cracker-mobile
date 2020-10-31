import React from "react";
import Constants from "expo-constants";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

export const ApolloWrapper = ({ children }) => {
  // const address = `https://${Constants.manifest.extra.apiAddress}/api`;
  const address = "https://cracker.red/api";
  console.log(address);
  const client = new ApolloClient({
    uri: address,
    cache: new InMemoryCache(),
  });

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};
