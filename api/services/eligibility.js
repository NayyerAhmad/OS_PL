const db = require("./db");
const helper = require("../helper");
const config = require("../config");

// used for checking the compatibility
async function search(id_os, id_pl) {
  const rows = await db.query(
    `SELECT * FROM eligibility
    WHERE id_os=${id_os} AND id_pl=${id_pl}`
  );

  const data = helper.emptyOrRows(rows);

  if (data) {
    return { message: "eligible" };
    } else {
    return { message: "not eligible" };
    }
    }
    

async function getMultiple(page = 1) {
  const offset = helper.getOffset(page, config.listPerPage);
  const rows = await db.query(
    `SELECT id_os, name_os, id_pl, name_pl
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
    (id_os, name_os, id_pl, name_pl) 
    VALUES 
    (${eligibility.id_os}, "${eligibility.name_os}",${eligibility.id_pl}, "${eligibility.name_pl}")`
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

