require("dotenv").config();

const config = {
  env: process.env.NODE_ENV || "development",
  isProd: process.env.NODE_ENV === "production",
  port: 3000,
  jwtSecret: process.env.JWT_SECRET,

  db: {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    name: process.env.DB_NAME,
    port: process.env.DB_PORT,
    url: process.env.DB_URL
  }
}

module.exports = {
  config
}
