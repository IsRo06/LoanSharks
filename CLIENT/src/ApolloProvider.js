import React from "react";
import App from "./App";
import ApolloClient from 'apollo-client';
import { InMemmoryCache } from 'apollo-cache-inmemmory';
import { createHttpLink } from 'apollo-link-http'
import { ApolloProvider } from '@apollo/react-hooks'

const httpLink = createHttpLink({
    uri: 'http://localhost::5000'
})

const client = new ApolloClient({
    link: httpLink,
    cache: new InMemmoryCache()
})

export default (
    <ApolloProvider client={client}>
        <App/>
    </ApolloProvider>

)