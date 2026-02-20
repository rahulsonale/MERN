const express = require("express");
const app = express();
const port = 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/register", (req, res) => {
  res.send("Standard GET responses");
});

app.post("/register", (req, res) => {
  res.send("Standard POST response");
});

app.listen(port, () => {
  console.log(`Listening to port ${port}`);
});
