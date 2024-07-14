const { Sequelize } = require("sequelize");
const { config } = require("../../../config/config");
const setupModels = require("../models")

let URI = "";
const options = {
  dialect: "postgres",
  logging: false,
};

if(config.isProd){
  console.log("Estamos en produccion")
  URI = config.db.url;

  options.dialectOptions = {
    ssl: {
      rejectUnauthorized: false
    }
  }
} else {
  console.log("Estamos en develop")
  const USER = encodeURIComponent(config.db.user);
  const PASSWORD = encodeURIComponent(config.db.password);
  URI = `postgres://${USER}:${PASSWORD}@${config.db.host}:${config.db.port}/${config.db.name}`;
}

const sequelize = new Sequelize(URI , options);

setupModels(sequelize);

// Esto no se hace en produccion
sequelize.sync();

module.exports = sequelize;
