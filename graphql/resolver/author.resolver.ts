
const authors = require('../data/book')
const authorsResolver = {
  Query: {
    authors: () => authors,
    authorById: (parent, args, context, info) => {
      // console.log(parent, 'parent')
      // console.log(args, 'args')
      // console.log(context, 'context')
      // console.log(info, 'info')
      // console.log(authors, 'authors')
      // console.log(authors.filter((item) => item.id === args.id)[0], 'authors.filter((item) => item.id === args.id)[0]')
      return authors.filter((item) => item.id == args.id)[0]
    }
  },
  // Mutation: {
  //   addauthors: () => authors
  // }
};
module.exports = authorsResolver