import "./App.css";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { Outlet } from "react-router-dom";

import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";

// Creates http link to GraphQL server
const httpLink = createHttpLink({
  uri: "/graphql",
});

// Sets up authentication link
const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

// Creates Apollo Client instance
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <div className="page-container">
      <ApolloProvider client={client}>
        <Navbar />
        <Outlet />
        {/* <Footer /> */}
      </ApolloProvider>
    </div>
  );
}

export default App;
