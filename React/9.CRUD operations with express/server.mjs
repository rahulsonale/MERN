import express from "express";
import todosRouter from "./todos.router.mjs";

const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server is working, Home page");
});

app.use("/todos", todosRouter);

app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});
