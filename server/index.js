const path = require('path');
const express  = require('express');
const app = express();
const routes = require('./routes.js');
const db = require('../database/index.js');
const port = process.env.PORT ||
3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(express.static(path.join(__dirname, '../client/public')));

app.use('/', routes.Router);

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});