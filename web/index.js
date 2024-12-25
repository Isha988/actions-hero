const express = require("express");
const sum = require("./util");
const app = express();

app.get("/", (req, res) => {
  res.send("Welcome");
});

app.get("/sum", (req, res) => {
  if (!req.query.a || !req.query.b) {
    res.status(400).json("Error");
  }
  const ans = sum(req.query.a, req.query.b);
  res.status(200).json(ans);
});

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Server running at ${PORT}`);
});
