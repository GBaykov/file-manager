import fs from "fs";
import path from "path";
import zlib from "zlib";
import { pipeline } from "stream";
import { fileURLToPath } from "url";
import { dirname } from "path";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const compress = async (path_to_file, path_to_destination) => {
  const input = fs.createReadStream(path_to_file);
  const output = fs.createWriteStream(path_to_destination);
  const brotli = zlib.createBrotliCompress();

  if (!fs.existsSync(path_to_file)) {
    console.log("Operation failed 16");
  } else {
    pipeline(input, brotli, output, (err) => {
      if (err) {
        console.log("Operation failed 20", err);
      }
    });
  }
};
