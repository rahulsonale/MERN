import express from "express";
import todosRouter from "./todos.router.mjs";
import { todos } from "./db.mjs";
import crypto from "crypto";

const app = express();
app.use(express.json());

const port = 3000;

app.get("/", (req, res) => {
  res.send("Server is working , Home page");
});

app.post("/todos ", (req, res) => {
  const { title } = req.body;
  const createdTodo = createNewTodo(title);
  res.status(200).send(createdTodo);
});

function createNewTodo(title) {
  const newTodo = {
    id: crypto.randomUUID(),
    title,
    completed: false,
    createDate: new Date().toISOString(),
  };

  todos.push(newTodo);
  return newTodo;
}

app.use("/todos", todosRouter);

app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});
