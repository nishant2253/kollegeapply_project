import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const getOverview = (req, res) => {
  const filePath = path.join(__dirname, "../data/overview.json");
  const jsonData = JSON.parse(fs.readFileSync(filePath, "utf-8"));

  res.json({ success: true, data: jsonData });
};
