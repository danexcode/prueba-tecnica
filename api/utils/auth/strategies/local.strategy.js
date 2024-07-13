const { Strategy } = require('passport-local');
const AuthService = require('../../../services/auth.service');

const service = new AuthService();

const localStrategy = new Strategy(
  {
    usernameField: 'userAuth',
    passwordField: 'password',
  },
  async (userAuth, password, done) => {
    try {
      const user = await service.getUser(userAuth, password);
      done(null, user);
    } catch (error) {
      done(error, false);
    }
  },
);

module.exports = localStrategy;
