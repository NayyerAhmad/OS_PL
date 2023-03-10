const express = require("express");
const router = express.Router();
const programmingLanguages = require("../services/programmingLanguages");
const opSys = require("../services/opSys");
const eligibility = require("../services/eligibility");

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

// OPERATING SYSTEMS 

/* GET operating systems. */
router.get("/OS/list", async function (req, res, next) {
  try {
    res.json(await opSys.getMultiple(req.query.page));
  } catch (err) {
    console.error(`Error while getting operating systems `, err.message);
    next(err);
  }
});

/* POST operating systems */
router.post("/OS/new", async function (req, res, next) {
  try {
    res.json(await opSys.create(req.body));
  } catch (err) {
    console.error(`Error while creating operating system`, err.message);
    next(err);
  }
});

/* SEARCH operating systems */

router.get("/search/OS/:key", async function (req, res, next) {
    try {
    res.json(await opSys.search(req.params.key));
  } catch (err) {
    console.error(`Error while finding opearting system`, err.message);
    next(err);
  }
});

/* PUT operating systems */
router.put("/OS/edit/:id", async function (req, res, next) {
  try {
    res.json(await opSys.update(req.params.id, req.body));
  } catch (err) {
    console.error(`Error while updating system`, err.message);
    next(err);
  }
});

/* DELETE operating systems */
router.delete("/OS/delete/:id", async function (req, res, next) {
  try {
    //res.json(await programmingLanguages.remove(req.params.id)); and also change the "/:id" in the router.detlete()- use this if you dont want to use the UI of POSTMAN
    res.json(await opSys.remove(req.params.id));

  } catch (err) {
    console.error(`Error while deleting operating system`, err.message);
    next(err);
  }
});

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

/* GET compatibilty */
router.get("/eligibility/list", async function (req, res, next) {
  try {
    res.json(await eligibility.getMultiple(req.query.page));
  } catch (err) {
    console.error(`Error while getting relationship `, err.message);
    next(err);
  }
});

/* POST compatibilty*/
router.post("/eligibility/new", async function (req, res, next) {
  try {
    res.json(await eligibility.create(req.body));
  } catch (err) {
    console.error(`Error while creating relationship`, err.message);
    next(err);
  }
});


/* PUT compatibilty */
router.put("/eligibility/edit/:id", async function (req, res, next) {
  try {
    res.json(await eligibility.update(req.params.id, req.body));
  } catch (err) {
    console.error(`Error while updating relationship`, err.message);
    next(err);
  }
});

/* DELETE compatibility */
router.delete("/eligibility/delete/:id", async function (req, res, next) {
  try {
    //res.json(await programmingLanguages.remove(req.params.id)); and also change the "/:id" in the router.detlete()- use this if you dont want to use the UI of POSTMAN
    res.json(await eligibility.remove(req.params.id));

  } catch (err) {
    console.error(`Error while deleting relationship`, err.message);
    next(err);
  }
});



module.exports = router;
