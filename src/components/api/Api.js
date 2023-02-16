const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql");

const app = express();
app.use(bodyParser.json());

// Connect to MySQL database
const pool = mysql.createPool({
  host: "localhost",
  user: "username",
  password: "password",
  database: "myDB",
});

// Add a language
app.post("/add-language", (req, res) => {
  const name = req.body.name;
  const releasedYear = req.body.releasedYear;
  const githubRank = req.body.githubRank;
  const pyplRank = req.body.pyplRank;
  const tiobeRank = req.body.tiobeRank;

  // Save the data to the database
  const sql = "INSERT INTO languages (name, released_year, github_rank, pypl_rank, ti
