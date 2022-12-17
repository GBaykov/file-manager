import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const create = async () => {
  if (!fs.existsSync(path.join(__dirname, "files", "fresh.txt"))) {
    fs.writeFile(
      path.join(__dirname, "files", "fresh.txt"),
      "I am fresh and young",
      (err) => {
        if (err) throw err;
        console.log("Файл был создан");
      }
    );
  } else throw Error("FS operation failed");
};

await create();
