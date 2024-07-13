const { Model, DataTypes } = require("sequelize");
const bcrypt = require("bcryptjs");

const USER_TABLE = "users";

const UserSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  email: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true
  },
  password: {
    allowNull: false,
    type: DataTypes.STRING
  },
  username: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  lastName: {
    allowNull: false,
    type: DataTypes.STRING,
    field: "last_name",
  }
}

class User extends Model {

  static config(sequelize){
    return {
      sequelize,
      tableName: USER_TABLE,
      modelName: "User",
      timestamps: false,
      hooks: {
        beforeCreate: async (user) => {
          const password = await bcrypt.hash(user.password, 10);
          user.password = password;
        }
      }
    }
  }
}

module.exports = {
  USER_TABLE,
  UserSchema,
  User
}
