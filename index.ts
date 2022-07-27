const path = require("path");
require('dotenv').config({ path: __dirname + '/.env' })
const { ApolloServer } = require('apollo-server');
const resolvers = require('./graphql/resolver')
const schema = require('./graphql/schema')
const server = new ApolloServer({
  schema,
  resolvers,
  csrfPrevention: true,
  cache: 'bounded',
  context: ({ req }) => {
    return {
      currentUser: req.headers.authorization ? { name: "faisal" } : undefined
    }
  }
});

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});