const mysql = require("mysql2/promise");
const { nom } = require("../config.json");

async function query(sql, params) {
  const connection = await mysql.createConnection(nom);
  const [results] = await connection.execute(sql, params);

  return results;
}

module.export = {
  query,
};
