import { execute } from "../utils/index.js";

export const executeJS = async (req, res) => {
  const { code } = req.body;
  const { status, output } = await execute("node -e ", code, "js");
  res.status(status).send(output);
};
