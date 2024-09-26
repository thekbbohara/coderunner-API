import { Router } from "express";
import { executeCPP } from "../controllers/cpp.js";
export const cppRouter = Router();
cppRouter.post("/cpp", executeCPP);
