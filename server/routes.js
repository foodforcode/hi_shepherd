const express = require("express");
const Router = express.Router();

const controllers = require("./controllers.js");

Router.get("/options", controllers.getAllOptions);
Router.get("/form", controllers.getFormFields);
Router.post("/form", controllers.addInsuree);

module.exports.Router = Router;
