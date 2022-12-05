const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const { guessNumber, init } = require("./core/guessGame");

const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

app.get("/", (req, res, next) => {
  let response = init(req.query.mode);
  res.send(response);
});

app.post("/easyMode", (req, res, next) => {
  let response = guessNumber(1, 10, 3, req.body.answer);
  res.send(response);
});

app.post("/mediumMode", (req, res, next) => {
  let response = guessNumber(1, 20, 5, req.body.answer);
  res.send(response);
});

app.post("/hardMode", (req, res, next) => {
  let response = guessNumber(1, 30, 7, req.body.answer);
  res.send(response);
});

app.listen(PORT, () => {
  console.log("connect to port " + PORT);
});
