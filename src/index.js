import dotenv from "dotenv";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./dashboard/App";
import { BrowserRouter as Router } from "react-router-dom";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
dotenv.config();

const client = new ApolloClient({
  uri: `${process.env.REACT_APP_BACKEND_URL}`,
  //uri: "localhost:2500/graphql",
  onError: ({ networkError, graphQLErrors }) => {
    console.log("graphQLErrors", graphQLErrors);
    console.log("networkErrors", networkError);
  }
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <Router>
      <App />
    </Router>
  </ApolloProvider>,
  document.getElementById("root")
);
