import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const rename = async () => {
  if (
    fs.existsSync(path.join(__dirname, "files", "properFilename.md")) ||
    !fs.existsSync(path.join(__dirname, "files", "wrongFilename.txt"))
  ) {
    throw new Error("FS operation failed 13");
  }
  fs.rename(
    path.join(__dirname, "files", "wrongFilename.txt"),
    path.join(__dirname, "files", "properFilename.md"),
    (err) => {
      if (err) throw err;
    }
  );
};

await rename();
