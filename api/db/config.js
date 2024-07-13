const { config } = require("../../config/config");

let URI = "";

if(config.isProd){
  URI = config.db.url;
} else {
  const USER = encodeURIComponent(config.db.user);
  const PASSWORD = encodeURIComponent(config.db.password);
  URI = `postgres://${USER}:${PASSWORD}@${config.db.host}:${config.db.port}/${config.db.name}`;
}

module.exports = {
  development: {
    url: URI,
    dialect: "postgres",
  },
  production: {
    url: URI,
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        rejectUnauthorized: false
      }
    }
  }
}
