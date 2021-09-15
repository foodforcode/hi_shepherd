const axios = require('axios');
const options = require('../api/coverageOptions.js');
const liability = require('../api/liabilityForm.js');
const risk = require('../api/buildersRiskForm.js');

const getAllOptions = (req, res) => {
  res.status(200).send(options);
}

const getFormFields = (req, res) => {
  if(req.query.body === "Liability") {
    res.status(200).send(liability);
  } else {
    res.status(200).send(risk);
  }
}

module.exports = {
  getAllOptions,
  getFormFields
}