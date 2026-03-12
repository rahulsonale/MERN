import { Router } from "express";
const router = Router();

import { todos } from "./db.mjs";

router.get("/", (req, res) => {
  res.json(todos);
});

export default router;
