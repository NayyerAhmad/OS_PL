const express = require("express");
const router = express.Router();
const programmingLanguages = require("../services/programmingLanguages");


// programming languages routes
/* GET programming languages. */
router.get("/pl/list", async function (req, res, next) {
  try {
    res.json(await programmingLanguages.getMultiple(req.query.page));
  } catch (err) {
    console.error(`Error while getting programming languages `, err.message);
    next(err);
  }
});

/* POST programming language */
router.post("/pl/new", async function (req, res, next) {
  try {
    res.json(await programmingLanguages.create(req.body));
  } catch (err) {
    console.error(`Error while creating programming language`, err.message);
    next(err);
  }
});

/* SEARCH programming language */

router.get("/search/pl/:key", async function (req, res, next) {
    try {
    res.json(await programmingLanguages.search(req.params.key));
  } catch (err) {
    console.error(`Error while finding programming language`, err.message);
    next(err);
  }
});

/* UPDATE programming language */
router.put("/pl/edit/:id", async function (req, res, next) {
  try {
    res.json(await programmingLanguages.update(req.params.id, req.body));
  } catch (err) {
    console.error(`Error while updating programming language`, err.message);
    next(err);
  }
});

/* DELETE programming language */
router.delete("/pl/delete/:id", async function (req, res, next) {
  try {
    //res.json(await programmingLanguages.remove(req.params.id)); and also change the "/:id" in the router.detlete()- use this if you dont want to use the UI of POSTMAN
    res.json(await programmingLanguages.remove(req.params.id));

  } catch (err) {
    console.error(`Error while deleting programming language`, err.message);
    next(err);
  }
});

module.exports = router;
