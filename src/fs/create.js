import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const create = async (new_file_name, dirname) => {
  if (!fs.existsSync(path.join(dirname, new_file_name))) {
    fs.writeFile(path.join(dirname, new_file_name), "", (err) => {
      if (err) {
        console.log("Operation failed 11", err);
      }
    });
  } else console.log("Operation failed 13");
};
