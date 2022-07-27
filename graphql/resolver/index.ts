export { };
const { composeResolvers } = require('@graphql-tools/resolvers-composition')

const path = require("path");

const { mergeResolvers } = require("@graphql-tools/merge");

const { loadFilesSync } = require("@graphql-tools/load-files");

const resolverFiles = loadFilesSync(path.join(__dirname, "./**/*.resolver.*"));

const resolvers = mergeResolvers(resolverFiles);

const isAuthenticated = () => next => async (root, args, context, info) => {
  if (!context.currentUser) {
    throw new Error('You are not authenticated!')
  }

  return next(root, args, context, info)
}

const resolversComposition = {
  'Query.!login': [isAuthenticated()]
}

module.exports = composeResolvers(resolvers, resolversComposition)