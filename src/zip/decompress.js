import fs from "fs";
import path, { dirname } from "path";
import zlib from "zlib";
import { pipeline } from "stream";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const decompress = async (path_to_file, path_to_destination) => {
  const input = fs.createReadStream(path_to_file);
  const output = fs.createWriteStream(path_to_destination);
  const brotli = zlib.createBrotliDecompress();

  // if (fs.existsSync(decomressed_filename)) {
  //   for (let i = 1; fs.existsSync(decomressed_filename); i++) {
  //     decomressed_filename = path.join(
  //       path_to_destination,
  //       path.basename(basename),
  //       `-${i}`,
  //       path.extname(basename)
  //     );
  //   }
  // }

  if (!fs.existsSync(path_to_file)) {
    console.log("Operation failed 26");
  } else {
    pipeline(input, brotli, output, (err) => {
      if (err) {
        console.log("Operation failed 30", err);
      }
    });
  }
};
