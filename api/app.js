const express = require('express');
const cors = require('cors')
const pool = require('pg');  // this is for vercel to work

const routerApi = require('./routes');
const { errorHandler, boomErrorHandler, ormErrorHandler } = require('./middlewares/error.handler');
const setupAuthStrategies = require('./utils/auth');

// const https = require('https');

function createApp() {
  const app = express();

  app.use(express.json());
  app.use(cors());

  setupAuthStrategies();

  app.get('/', (req, res) => {
    res.send('Hola mi server en express');
  });

  routerApi(app);

  app.use(ormErrorHandler);
  app.use(boomErrorHandler);
  app.use(errorHandler);

  return app;
}

module.exports = createApp;
