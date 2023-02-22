const db = require("./db");
const helper = require("../helper");
const config = require("../config");

// used for checking the compatibility
async function search(code_os, code_pl) {
  const rows = await db.query(
    `SELECT * FROM eligibility
    WHERE code_os=${code_os} AND code_pl=${code_pl}`
  );

  const data = helper.emptyOrRows(rows);
  console.log(data)

  if (data.length>0) {
    return { message: "eligible" };
    } else {
    return { message: "not eligible" };
    }
    }
    

async function getMultiple(page = 1) {
  const offset = helper.getOffset(page, config.listPerPage);
  const rows = await db.query(
    `SELECT id, code_os, name_os, code_pl, name_pl
    FROM eligibility`
  );
  const data = helper.emptyOrRows(rows);
  const meta = { page };

  return {
    data,
    meta,
  };
}

async function create(eligibility) {
  const result = await db.query(
    `INSERT INTO eligibility 
    (code_os, name_os, code_pl, name_pl) 
    VALUES 
    (${eligibility.code_os}, "${eligibility.name_os}",${eligibility.code_pl}, "${eligibility.name_pl}")`
  );

  let message = "Error in creating relationship";

  if (result.affectedRows) {
    message = "Relationship created successfully";
  }

  return { message };
}

async function update(id, eligibility) {
  const result = await db.query(
    `UPDATE eligibility 
    SET name_os="${eligibility.name_os}", name_pl="${eligibility.name_pl}"
    WHERE id=${id}`
  );

  let message = "Error in updating relationship";

  if (result.affectedRows) {
    message = "Relationship updated successfully";
  }

  return { message };
}

async function remove(id) {
  const result = await db.query(
    `DELETE FROM eligibility WHERE id=${id}`
  );

  let message = "Error in deleting relatipnship";

  if (result.affectedRows) {
    message = "Relationship deleted successfully";
  }

  return { message };
}

module.exports = {
  getMultiple,
  create,
  update,
  remove,
  search,
};

