const express = require("express");
const router = express.Router();
const eligibility = require("../services/eligibility")

// Eligibility

/* SEARCH for eligibility */

router.get("/eligibility/:key/:value", async function (req, res, next) {
    try {
      res.json(await eligibility.search(req.params.key, req.params.value));
    } catch (err) {
      console.error(`Not compatible`, err.message);
      next(err);
    }
  });
  

  module.exports = router;