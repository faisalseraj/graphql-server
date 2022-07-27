
export { }
const users = require('../../data/user')
const authors = require('../../data/author')
const { createUser, login } = require('./implementUser')
const booksResolver = {
  Query: {
    users: () => users,
    bookById: (parent, args, context, info) => {
      // console.log(parent, 'parent')
      // console.log(args, 'args')
      // console.log(context, 'context')
      // console.log(info, 'info')
      // console.log(books, 'books')
      // console.log(books.filter((item) => item.id === args.id)[0], 'books.filter((item) => item.id === args.id)[0]')
      const bk = users.filter((item) => item.id == args.id)[0]
      // const auth = authors.filter((item) => item.id == bk.id)[0]
      return {
        ...bk,
      }
    },
  },
  Mutation: {
    login,
    createUser: createUser
  }
};
module.exports = booksResolver