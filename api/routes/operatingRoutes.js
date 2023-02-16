const express = require("express");
const router = express.Router();
const opSys = require("../services/opSys")

// Operating Systems languages routes

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
      res.json(await opSys.remove(req.query.id));
  
    } catch (err) {
      console.error(`Error while deleting operating system`, err.message);
      next(err);
    }
  });

  module.exports = router;