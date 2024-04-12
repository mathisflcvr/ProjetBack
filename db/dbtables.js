let con = mysql.createConnection({
  host: config.host,
  user: config.user,
  password: config.password,
  database: config.database,
});

con.connect(function (err) {
  if (err) throw err;
  console.log("successfully connected to the database");
  con.query(
    "CREATE TABLE IF NOT EXISTS MOB (id INT AUTO_INCREMENT PRIMARY KEY",
    function (err, result) {
      if (err) throw err;
      console.log("Database succesfully created");
    }
  );
});
