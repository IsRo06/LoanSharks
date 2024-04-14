import React from "react";
import App from "./App";
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from "@apollo/client";


const httpLink = createHttpLink({
    uri: 'http://localhost::5000'
})

const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache()
})

export default function ApolloProviderr(){
    <ApolloProvider client={client}>
        <App></App>
    </ApolloProvider>

}