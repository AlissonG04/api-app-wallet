require("dotenv").config();
const cors = require("cors");
const express = require("express");
const db = require("./db");
const routesCategories = require("./routes/categories");
const routesUsers = require("./routes/users");
const routesFincanes = require("./routes/finances");

const app = express();
app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());

const port = process.env.PORT;

app.get("/", (req, res) => {
  res.send("Olá, essa é uma aplicação back-end");
});

app.use("/categories", routesCategories);
app.use("/users", routesUsers);
app.use("/finances", routesFincanes);

app.listen(port, () => {
  db.connect()
    .then(() => {
      console.log("DB connected");
    })
    .catch((error) => {
      throw new Error(error);
    });
  console.log(`Example app listening on port ${port}`);
});
