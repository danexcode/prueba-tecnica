const express = require('express');
const cors = require('cors');
const pool = require('pg'); // this is for vercel to work

function createApp() {
  const app = express();

  app.use(express.json());
  app.use(cors());

  app.get('/', (req, res) => {
    res.send('Hola mi server en express');
  });

  return app;
}

module.exports = createApp;
