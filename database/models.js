const db = require("./index.js");
const format = require("pg-format");

const addInsuree = (params, formOption, callback) => {
  let table =
    formOption === "General Liability"
      ? "liability_insurees"
      : "builders_risk_insurees";

  let cols = Object.keys(params).join(", ");
  let values = Object.values(params);

  let query = format(
    `INSERT INTO ${table}(${Object.keys(params).join(", ")}) VALUES( %L )`,
    Object.values(params)
  );

  db.client.query(query, callback);
};

module.exports = {
  addInsuree,
};
