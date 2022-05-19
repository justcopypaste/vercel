const express = require("express");
const nunjucks = require("nunjucks");
const app = express();

nunjucks.configure(__dirname+"/views", {
  autoescape: true,
  express: app,
});

const frutas = ["Manzana", "Pera", "Frutilla"];
const crearFrutas = async (req, res) => {
  if (req.body.fruta != "") {
    frutas.push(req.body.fruta);
  }
  res.redirect("/frutas");
};
const obtenerFrutas = async (req, res) => {
  res.render("home", { frutas: frutas });
};

app.set("view engine", "njk");
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.redirect("/frutas");
});
app.get("/frutas", obtenerFrutas);
app.post("/frutas", crearFrutas);

module.exports = app;

