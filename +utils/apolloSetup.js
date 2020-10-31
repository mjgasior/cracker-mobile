import Constants from "expo-constants";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/client";

const client = new ApolloClient({
  uri: `http://${Constants.manifest.extra.apiAddress}/api`,
  request: (operation) => {
    operation.setContext((context) => ({
      headers: {
        ...context.headers,
      },
    }));
  },
});

export { client, ApolloProvider };
