import express from "express";
import cors from "cors";
import "dotenv/config.js";
import { healthRouter, jsRouter, pyRouter } from "./routes/index.js";

const { PORT, HOST } = process.env;
const app = express();
app.use(express.json());
app.use(cors());
app.get("/", (_, res) => {
  res.status(200).end("ok");
});
app.use("/", healthRouter);
app.use("/api/v1/exec", jsRouter, pyRouter);

app.listen(PORT||4000, HOST||"localhost", () => {
  console.log(`Listening on host:${HOST||"localhost"} port:${PORT||4000}`);
});
