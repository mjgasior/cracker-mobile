import Constants from "expo-constants";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";

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
