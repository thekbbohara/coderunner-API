import { serve } from "@hono/node-server";
import { Hono } from "hono";
const app = new Hono();
app.get("/health", (c) => {
    return c.json({ msg: "Everything is running well." }, 200);
});
const PORT = Number(process.env.PORT) || 1234;
const HOST = process.env.HOST || "0.0.0.0";
console.log(`Server is running on ${HOST}:${PORT}`);
serve({
    fetch: app.fetch,
    port: PORT,
    hostname: HOST,
});
