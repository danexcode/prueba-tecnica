const UserService = require('./users.service');
const boom = require('@hapi/boom');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { config } = require('../../config/config');
const { checkEmail } = require('../utils/regex')

const service = new UserService();

class AuthService {
  async getUser(userAuth, password) {
    isEmail = checkEmail(userAuth)
    const user = undefined;
    if (isEmail) {
      user = await service.findByEmail(userAuth);
      if (!user) {
        throw boom.unauthorized();
      }
    } else {
      user = await service.findByUsername(userAuth);
      if (!user) {
        throw boom.unauthorized();
      }
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      throw boom.unauthorized();
    }
    delete user.dataValues.password;
    return user;
  }

  signToken(user) {
    const payload = {
      sub: user.id,
    };
    const token = jwt.sign(payload, config.jwtSecret);
    return { user, token };
  }
}

module.exports = AuthService;
