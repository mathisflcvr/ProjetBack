const express = require("express");
const path = require("path");

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "src")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get("/hello", (req, res) => {
  res.send("Hello World!");
});

//const scoreBoard = require("src/routes/scoreBoard.route");
//app.use("/score", scoreBoard);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
