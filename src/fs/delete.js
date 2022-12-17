import { stat } from "node:fs/promises";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const remove = async () => {
  if (fs.existsSync(path.join(__dirname, "files", "fileToRemove.txt"))) {
    fs.unlink(
      path.join(__dirname, "files", "fileToRemove.txt"),
      function (err) {
        if (err) throw new Error("FS operation failed");
      }
    );
  } else throw new Error("FS operation failed");
};

await remove();
