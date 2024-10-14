import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
import { createReadStream, createWriteStream } from "fs";
import { remove } from "./delete.js";
import { copy } from "./copy.js";

export const move = async (path_to_file, path_to_new_directory) => {
  await copy(path_to_file, path_to_new_directory);
  await remove(path_to_file);
};
