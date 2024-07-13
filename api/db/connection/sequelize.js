const { Sequelize } = require("sequelize");
const { config } = require("../../config/config");
const setupModels = require("../db/models")

let URI = "";
const options = {
  dialect: "postgres",
  logging: false,
};

if(config.isProd){
  URI = config.dbUrl;

  options.dialectOptions = {
    ssl: {
      rejectUnauthorized: false
    }
  }
} else {
  const USER = encodeURIComponent(config.db.user);
  const PASSWORD = encodeURIComponent(config.db.password);
  URI = `postgres://${USER}:${PASSWORD}@${config.db.host}:${config.db.port}/${config.db.name}`;
}

const sequelize = new Sequelize(URI , options);

setupModels(sequelize);

// Esto no se hace en produccion
sequelize.sync();

module.exports = sequelize;
