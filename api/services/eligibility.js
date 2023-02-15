const db = require("./db");
const helper = require("../helper");
const config = require("../config");

async function search(name_os, name_pl) {
  const rows = await db.query(
    `SELECT * FROM eligibility
    WHERE name_os="${name_os}" AND name_pl="${name_pl}";`
  );

  const data = helper.emptyOrRows(rows);

  if (data) {
    return { message: "eligible" };
    } else {
    return { message: "not eligible" };
    }
    }
    
    module.exports = {
    search,
    };