import React from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { useAuthorizationContext } from "../+hooks/useAuthorizationContext";
import Constants from "expo-constants";

export const ApolloWrapper = ({ children }) => {
  const { auth } = useAuthorizationContext();

  const httpLink = new HttpLink({
    uri: `https://${Constants.manifest.extra.apiAddress}/api`,
  });

  const authLink = setContext((_, { headers, ...rest }) => {
    if (!auth) {
      return { headers, ...rest };
    }
    return {
      ...rest,
      headers: {
        ...headers,
        authorization: `Bearer ${auth}`,
      },
    };
  });

  console.log(auth);

  const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};
