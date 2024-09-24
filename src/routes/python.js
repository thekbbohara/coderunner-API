import { Router } from "express";
import { execute } from "../utils/index.js";

export const pyRouter = Router();

pyRouter.post("/py", async (req, res) => {
  const { code } = req.body;
  const { status, output } = await execute("python3", code, "py");
  res.status(status).send(output);
});
