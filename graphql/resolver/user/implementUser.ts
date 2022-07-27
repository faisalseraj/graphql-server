export { }
const models = require('../../../models')
const jwt = require('jsonwebtoken')

const users = require('../../data/user')
const authors = require('../../data/author')
const createUser = async (_, params) => {
  console.log(params, 'params')
  const transaction = await models.sequelize.transaction()
  

}

const login = (parent, args, context, info) => {
  let jwtSecretKey = process.env.JWT_SECRET_KEY;
  const user = users.filter((item) => item.phone == args.phone && item.password == args.password)[0]
  if (user) {
    let data = {
      time: Date(),
      userId: user.id,
    }
    const token = jwt.sign(data, jwtSecretKey);
    return {
      user,
      accessToken: token
    }
  }
  else {
    throw new Error('User not found')

  }
}

module.exports = {
  createUser,
  login
}
