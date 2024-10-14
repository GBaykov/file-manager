import { stat } from "node:fs/promises";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const remove = async (path_to_file) => {
  if (fs.existsSync(path_to_file)) {
    fs.unlink(path.join(path_to_file), function (err) {
      if (err) console.log("Operation failed", err);
    });
  } else console.log("Operation failed");
};
