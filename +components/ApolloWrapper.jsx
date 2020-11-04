import React, { useEffect, useState } from "react";
import Constants from "expo-constants";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { useAuthorizationContext } from "../+hooks/useAuthorizationContext";

export const ApolloWrapper = ({ children }) => {
  const [client, setClient] = useState();
  const { auth, setIsAuthorized } = useAuthorizationContext();

  useEffect(() => {
    const apolloClient = new ApolloClient({
      uri: `https://${Constants.manifest.extra.apiAddress}/api`,
      cache: new InMemoryCache(),
      request: (operation) => {
        operation.setContext((context) => ({
          headers: {
            ...context.headers,
            authorization: `Bearer ${auth}`,
          },
        }));
      },
    });

    setClient(apolloClient);

    if (auth) {
      setIsAuthorized(true);
    }
  }, [setClient, auth, setIsAuthorized]);

  if (client) {
    console.log(auth);

    return <ApolloProvider client={client}>{children}</ApolloProvider>;
  } else {
    return null;
  }
};
