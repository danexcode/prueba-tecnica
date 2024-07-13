const Joi = require("joi");

const id = Joi.number().integer();
const email = Joi.string().email();
const password = Joi.string().min(8);
const username = Joi.string().min(3);
const name = Joi.string().min(3);
const lastName = Joi.string().min(2)

const createUserSchema = Joi.object({
  email: email.required(),
  password: password.required(),
  username: username.required(),
  name: name.required(),
  lastName: lastName.required()
});

const updateUserSchema = Joi.object({
  email: email,
  password: password,
  username: username,
  name: name,
  lastName: lastName
});

const getUserSchema = Joi.object({
  id: id.required()
});

module.exports = {
  createUserSchema,
  updateUserSchema,
  getUserSchema
}
