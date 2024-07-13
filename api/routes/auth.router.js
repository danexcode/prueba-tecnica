const express = require('express');
const passport = require('passport');
const AuthService = require("../services/auth.service");

const router = express.Router();
const service = new AuthService();

router.post(
  '/login',
  passport.authenticate('local', { session: false }),
  async (request, response, next) => {
    try {
      const user = request.user;
      const sign = service.signToken(user);
      response.json(sign);
    } catch (error) {
      next(error);
    }
  },
);

module.exports = router;
