import { execute } from "../utils/index.js";

export const executePY = async (req, res) => {
  const { code } = req.body;
  const { status, output } = await execute("python3", code, "py");
  res.status(status).send(output);
};
