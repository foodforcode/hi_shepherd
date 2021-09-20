const axios = require("axios");
const express = require("express");
const app = express();
const options = require("../api/coverageOptions.js");
const liability = require("../api/liabilityForm.js");
const risk = require("../api/buildersRiskForm.js");
const models = require("../database/models.js");

const getAllOptions = (req, res) => {
  res.status(200).send(options);
};

const getFormFields = (req, res) => {
  if (req.query.body === "General Liability") {
    res.status(200).send(liability);
  } else {
    res.status(200).send(risk);
  }
};

const addInsuree = (req, res) => {
  if (req.headers.cookie === "shepherd") {
    models.addInsuree(
      req.body.params.inputs,
      req.body.params.formOption,
      (err, results) => {
        if (err) {
          res.status(400).send(err);
        } else {
          res.status(200).send(results);
        }
      }
    );
  } else {
    res.sendStatus(401);
  }
};

module.exports = {
  getAllOptions,
  getFormFields,
  addInsuree,
};
