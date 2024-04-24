const { ApolloServer} = require('apollo-server');
const mongoose = require('mongoose');
const path = require('path');
const fs = require('fs');
const AWS = require('aws-sdk');




// AWS.config.update({
//   accessKeyId: 'AKIA5FTZEFBZB6DFKHHD',
//   secretAccessKey: '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',
//   region: 'us-east-2'
// });


const s3 = new AWS.S3();

const typeDefs = require('./graphql/TypeDefs');
// Since I couldnt get it to work with just using the resolvers path name
//Went in and iterated through the diff resolver files that end in .js
const resolvers = fs.readdirSync(path.join(__dirname, './graphql/resolvers'))
  .filter(file => file.endsWith('.js'))
  .map(file => require(path.join(__dirname, './graphql/resolvers', file)));


const { MONGODB } = require('./config.js');

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => ({req})
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