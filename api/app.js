const express = require('express');
const cors = require('cors')
const path = require('path');
const pool = require('pg');  // this is for vercel to work

const { routerAPI } = require('./routes');
const { logErrors, errorHandler, boomErrorHandler, ormErrorHandler } = require('./middlewares/error.handler');
const setupAuthStrategies = require('./utils/auth');

const https = require('https'); // this is for vercel to work

function createApp() {
  const app = express();

  app.use(express.json());
  app.use(cors());

  setupAuthStrategies();

  app.get('/', (request, response) => {
    response.sendFile(path.join(__dirname, '../pages/login/index.html'));
  });

  app.get('/register', (request, response) => {
    response.sendFile(path.join(__dirname, '../pages/register/index.html'));
  });

  app.get('/profile', (request, response) => {
    response.sendFile(path.join(__dirname, '../pages/profile/index.html'));
  });

  routerAPI(app);

  app.use(ormErrorHandler);
  app.use(boomErrorHandler);
  app.use(errorHandler);

  return app;
}

module.exports = createApp;
