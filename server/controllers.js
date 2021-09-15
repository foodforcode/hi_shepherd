const axios = require('axios');
const options = require('../api/coverageOptions.js');

const getAllOptions = (req, res) => {
  res.status(200).send(options);
}

module.exports = {
  getAllOptions
}