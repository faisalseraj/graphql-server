
export { };

const { mergeTypeDefs } = require('@graphql-tools/merge')

const { loadFilesSync } = require("@graphql-tools/load-files");

const { makeExecutableSchema } = require("@graphql-tools/schema");

const path = require("path");

const typeDefs = loadFilesSync(path.join(__dirname, "./**/*.schema.*"));

const resolvers = require('../resolver')

const mergedSchema = mergeTypeDefs(typeDefs)

const schema = makeExecutableSchema({ typeDefs: mergedSchema, resolvers });

module.exports = schema
