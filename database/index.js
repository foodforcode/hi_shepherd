const { Client } = require("pg");

const client = new Client({
  host: "localhost",
  user: process.env.USER,
  database: "test",
  password: null,
  port: 5432,
});

client.connect((err) => {
  if (err) {
    console.log("connection error", err);
  } else {
    console.log("connected to postgres!");
  }
});

module.exports = {
  client,
};
