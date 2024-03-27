const { ApolloServer } = require('apollo-server');
const gql = require('graphql-tag');
const mongoose = require('mongoose');

const typeDefs = require("./TypeDefs");
const resolvers = require("./Resolvers/car")
const resolvers2 = require("./Resolvers/user")
const { MONGODB } = require('./config');

const server = new ApolloServer({
  typeDefs,
  resolvers,
  resolvers2
});

mongoose
  .connect(MONGODB, { useNewUrlParser: true })
  .then(() => {
    console.log('MongoDB Connected');
    return server.listen({ port: 5000 });
  })
  .then((res) => {
    console.log(`Server running at ${res.url}`);
  });