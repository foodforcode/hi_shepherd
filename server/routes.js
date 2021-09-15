const express = require('express');
const Router = express.Router();
const controllers = require('./controllers.js');

Router.get('/options', controllers.getAllOptions);

module.exports.Router = Router;