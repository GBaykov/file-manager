import { resolve } from "path";
import { chdir, cwd } from "process";
import { isDirectory } from "../utils/index.js";
import { stat } from "fs/promises";

export const cd = async (path_to_directory) => {
  const cdDir = resolve(cwd(), path_to_directory);

  const stats = await stat(path);

  if (stats.isDirectory()) {
    chdir(cdDir);
  } else console.log("Invalid input");
};
