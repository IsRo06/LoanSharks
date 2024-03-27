const { ApolloServer } = require('apollo-server');
const gql = require('graphql-tag');
const mongoose = require('mongoose');

const typeDefs = require("./TypeDefs");
const resolvers = require("./Resolvers/user");
const { MONGODB } = require('./config.js');

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

mongoose
  .connect(MONGODB, { useNewUrlParser: true })
  .then(() => {
    console.log('MongoDB Connected');
    return server.listen({ port: 5001 });
  })
  .then((res) => {
    console.log(`Server running at ${res.url}`);
  });