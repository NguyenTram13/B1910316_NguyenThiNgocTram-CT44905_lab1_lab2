const express = require("express");
const cors = require("cors");
const { application } = require("express");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Welcome to contactbook application." });
});

module.exports = app;
