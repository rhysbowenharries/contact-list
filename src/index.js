import React from "react";
import ReactDOM from "react-dom";
// import ApolloClient from "apollo-boost";
import { ApolloClient, InMemoryCache } from "@apollo/client";

// import { ApolloProvider } from "@apollo/react-hooks";
import { ApolloProvider } from "@apollo/client";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

// some error handling here?

const client = new ApolloClient({
  uri: "http://localhost:4520",
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
