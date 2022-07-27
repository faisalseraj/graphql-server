
export { }
const books = require('../data/book')
const authors = require('../data/author')
const users = require('../data/user')
const booksResolver = {
  Query: {
    books: async (parent, args, context, info) => {
      let allBooks = []

      for (let book of books) {
        const auth = await authors.filter((item) => item.id == book.id)[0]
        const user = await authors.filter((item) => item.id == book.user)[0]
        await allBooks.push({
          ...book,
          author: auth,
          user
        })
      }
      return allBooks
    },
    bookById: (parent, args, context, info) => {
      // console.log(parent, 'parent')
      // console.log(args, 'args')
      // console.log(context, 'context')
      // console.log(info, 'info')
      // console.log(books, 'books')
      // console.log(books.filter((item) => item.id === args.id)[0], 'books.filter((item) => item.id === args.id)[0]')
      console.log(books, 'books')
      const bk = books.filter((item) => item.id == args.id)[0]
      const auth = authors.filter((item) => item.id == bk.id)[0]
      const user = authors.filter((item) => item.id == bk.user)[0]
      console.log(user, 'user')
      return {
        ...bk,
        author: auth,
        user
      }
    }
  },
  // Mutation: {
  //   addBooks: () => books
  // }
};
module.exports = booksResolver