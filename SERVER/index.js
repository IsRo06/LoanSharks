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


// const imageFile = fs.readFileSync('../CLIENT/src/images/redhondacivic.jpg');
// (async () => {
//   await s3
//     .putObject({
//       Body: imageFile,
//       Bucket: "lseimages",
//       Key: "31",
//       ContentType: "image/jpeg"
//     }).promise();
// })();


// function uploadImageToS3(imageFile) {
//   const params = {
//     Bucket: 'your-bucket-name', // Replace with your S3 bucket name
//     Key: 'image.jpg', // Specify the key (filename) for the image in the bucket
//     Body: imageFile, // Pass the image file data
//     ContentType: 'image/jpeg' // Adjust the content type as needed
//   };

//   s3.putObject(params, (err, data) => {
//     if (err) {
//       console.error('Error uploading image to S3:', err);
//     } else {
//       console.log('Successfully uploaded image to S3:', data);
//     }
//   });
// }

mongoose
  .connect(MONGODB, { useNewUrlParser: true })
  .then(() => {
    console.log('MongoDB Connected');
    return server.listen({ port: 5000 });
  })
  .then((res) => {
    console.log(`Server running at ${res.url}`);
  });