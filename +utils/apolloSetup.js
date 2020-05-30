import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";

const client = new ApolloClient({
  uri: "http://52.57.1.227/api",
  request: (operation) => {
    operation.setContext((context) => ({
      headers: {
        ...context.headers,
      },
    }));
  },
});

export { client, ApolloProvider };
