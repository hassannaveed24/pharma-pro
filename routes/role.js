const Role = require("../models/role");
const express = require("express");
const app = express();

module.exports = async (app) => {
  app.post("/api/role", async (req, res) => {
    try {
      let role = new Role(req.body);
      role = await role.save();
      res.status(200).send(role);
    } catch (err) {
      res.status(406).send({ message: err.message });
    }
  });
};
