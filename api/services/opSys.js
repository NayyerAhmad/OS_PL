const db = require("./db");
const helper = require("../helper");
const config = require("../config");

async function getMultiple(page = 1) {
  const offset = helper.getOffset(page, config.listPerPage);
  const rows = await db.query(
    `SELECT id, name, released_year 
    FROM operating_system`
  );
  const data = helper.emptyOrRows(rows);
  const meta = { page };

  return {
    data,
    meta,
  };
}

async function create(opSys) {
  const result = await db.query(
    `INSERT INTO operating_system 
    (name, released_year) 
    VALUES 
    ("${opSys.name}", ${opSys.released_year})`
  );

  let message = "Error in creating operating system";

  if (result.affectedRows) {
    message = "Operating system created successfully";
  }

  return { message };
}

async function update(id, opSys) {
  const result = await db.query(
    `UPDATE operating_system 
    SET name="${opSys.name}", released_year=${opSys.released_year}
    WHERE id=${id}`
  );

  let message = "Error in updating operating system";

  if (result.affectedRows) {
    message = "operating system updated successfully";
  }

  return { message };
}

async function remove(id) {
  const result = await db.query(
    `DELETE FROM operating_system WHERE id=${id}`
  );

  let message = "Error in deleting operating system";

  if (result.affectedRows) {
    message = "Operating system deleted successfully";
  }

  return { message };
}


async function search(opSys) {
  const rows = await db.query(
    `SELECT * FROM operating_system WHERE name LIKE "%${opSys}%" and %${id}%`
  );

  const data = helper.emptyOrRows(rows);

  return {data};
}

module.exports = {
  getMultiple,
  create,
  update,
  remove,
  search,
};
