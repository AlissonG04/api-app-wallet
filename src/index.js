const { response } = require("express");
const express = require("express");
const db = require("./db");
const routerCategories = require("./router/categories");

const app = express();
//Configuração para receber via body em json
app.use(express.json());

const port = 3000;

app.get("/", (req, res) => {
  res.send("Olá, essa é uma aplicação back-end");
});

app.use("/categories", routerCategories);

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
