const express = require("express");
const app = express();
require("dotenv").config();
const loginRoute = require("./route/loginRoute");

const port = process.env.PORT || 8080;

app.use(express.json());  // for parsing application/json

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api/login", loginRoute);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
