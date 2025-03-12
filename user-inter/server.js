const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/products", (req, res) => {
  const products = JSON.parse(
    fs.readFileSync(path.join(__dirname, "..", "products.json"))
  );
  res.json(products);
});

app.listen(port, () => {
  console.log(`User interface server running at http://localhost:${port}`);
});
