import { Router } from "express";
import { executePY } from "../controllers/python.js";
export const pyRouter = Router();
pyRouter.post("/py", executePY);
