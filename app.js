const express = require("express");
const path = require("path");
const app = express();
const dotenv = require("dotenv").config;
const port = process.env.PORT || 8000;

const bodyParser = require("body-parser");
const db = require("./queries");

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
const staticPath = path.join(__dirname, "public");
app.set("view engine", "hbs");

app.use(express.static(staticPath));
app.get("/publications", db.getUsers);

app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});
