const express = require("express");
const db = require("./db");
const routesCategories = require("./routes/categories");
const routesUsers = require("./routes/users");
const app = express();

//Configuração para receber via body em json
app.use(express.json());

const port = 3000;

app.get("/", (req, res) => {
  res.send("Olá, essa é uma aplicação back-end");
});

//Lincando as rotas
app.use("/categories", routesCategories);
app.use("/users", routesUsers);

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
