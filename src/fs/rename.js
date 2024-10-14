import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const rename = async (path_to_file, new_filename) => {
  let new_file = "";

  if (path.extname(new_filename) === "") {
    new_file = path.join(
      path.dirname(path_to_file),
      `${new_filename}${path.extname(path_to_file)}`
    );
  } else new_file = path.join(path.dirname(path_to_file), new_filename);

  if (!fs.existsSync(path_to_file) || fs.existsSync(new_file)) {
    console.log("Operation failed rename1");
  } else {
    fs.rename(path.join(path_to_file), path.join(new_file), (err) => {
      if (err) console.log("Operation failed rename2");
    });
  }
};
