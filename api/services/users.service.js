const boom = require("@hapi/boom");
const bcrypt = require("bcryptjs");
const { models } = require("../db/connection/sequelize");

class UsersServices {

  async create(data) {
    const newUser = await models.User.create(data);
    delete newUser.dataValues.password;
    return newUser;
  }

  async find() {
    const response = await models.User.findAll();
    response.forEach((user) => {
      delete user.dataValues.password;
    });
    return response;
  }

  async findByEmail(email) {
    const response = await models.User.findOne({
      where: { email }
    });
    return response;
  }

  async findById(id) {
    const user = await models.User.findByPk(id);
    if(!user){
      throw boom.notFound("user not found");
    }
    // delete user.dataValues.password; Esta linea rompe el codigo
    return user;
  }

  async findByUsername(username) {
    const response = await models.User.findOne({
      where: { username }
    });
    return response;
  }

  async update(id, changes) {
    const user = await this.findById(id);
    if (changes.password) {
      changes.password = await bcrypt.hash(changes.password, 10);
    }
    const updatedUser = await user.update(changes);
    delete updatedUser.dataValues.password;
    return updatedUser;
  }

  async delete(id) {
    const user = await this.findById(id);
    await user.destroy();
    return { id };
  }

}

module.exports = UsersServices;
