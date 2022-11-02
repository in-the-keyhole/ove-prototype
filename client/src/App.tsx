import React from 'react';
import './App.css';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CompanyPage from './pages/CompanyPage';

function App() {

  const client = new ApolloClient({
    uri: "/api/graphql",
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      <Router>
        <Routes >
          <Route path="/" element={<CompanyPage />} />
        </Routes>
      </Router>
    </ApolloProvider>
  );
}

export default App;
