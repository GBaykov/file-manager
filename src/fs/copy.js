import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
import { createReadStream, createWriteStream } from "fs";

export const copy = async (path_to_file, path_to_new_directory) => {
  const new_file = path.join(
    path_to_new_directory,
    path.basename(path_to_file)
  );

  if (!fs.existsSync(path_to_file) || fs.existsSync(new_file)) {
    console.log("Operation failed copy1");
  } else {
    createReadStream(path_to_file).pipe(createWriteStream(new_file));
  }
};
