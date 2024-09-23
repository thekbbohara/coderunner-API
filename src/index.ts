import { serve } from "@hono/node-server";
import { Hono } from "hono";

const app = new Hono();

app.get("/health", (c): Response => {
  return c.json({ msg: "Everything is running well." }, 200);
});

const PORT: number = Number(process.env.PORT) || 1234;
const HOST: string = process.env.HOST || "0.0.0.0";
console.log(`Server is running on ${HOST}:${PORT}`);

serve({
  fetch: app.fetch,
  port: PORT,
  hostname: HOST,
});
