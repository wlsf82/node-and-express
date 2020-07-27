require("dotenv").config();
const express = require("express");

const requestId = require("./middleware/request-id");

const app = express();

app.use(requestId);

app.get("/hello", (req, res) => {
  res.send("Hello, world!\n");
});

app.get("/goodbye", (req, res) => {
  res.send("Goodbye, and thanks for the mushrooms!\n");
});

module.exports = app;
