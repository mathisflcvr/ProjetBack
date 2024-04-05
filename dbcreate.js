const mysql = require("mysql");
const { nom } = require("./config.json");

let con = mysql.createConnection({
  host: nom.host,
  user: nom.user,
  password: nom.password,
});

con.connect(function (err) {
  if (err) throw err;
  console.log("successfully connected to the database");
  con.query(
    "CREATE DATABASE IF NOT EXISTS gentilshmup",
    function (err, result) {
      if (err) throw err;
      console.log("Database succesfully created");
    }
  );
});
