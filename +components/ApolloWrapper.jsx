import React from "react";
import Constants from "expo-constants";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { useAuthorizationContext } from "../+hooks/useAuthorizationContext";

export const ApolloWrapper = ({ children }) => {
  const { auth, setIsAuthorized } = useAuthorizationContext();

  console.log(auth);

  const client = new ApolloClient({
    uri: `https://${Constants.manifest.extra.apiAddress}/api`,
    cache: new InMemoryCache(),
    request: (operation) => {
      if (auth) {
        setIsAuthorized(true);
      }

      operation.setContext((context) => ({
        headers: {
          ...context.headers,
          authorization: `Bearer ${auth}`,
        },
      }));
    },
  });

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};
