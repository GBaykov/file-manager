import fs from "fs";
import path from "path";
import zlib from "zlib";
import { pipeline } from "stream";
import { fileURLToPath } from "url";
import { dirname } from "path";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compress = async () => {
  const input = fs.createReadStream(
    path.join(__dirname, "/files", "fileToCompress.txt")
  );
  const output = fs.createWriteStream(
    path.join(__dirname, "/files", "archive.gz")
  );
  const gzip = zlib.createGzip();

  pipeline(input, gzip, output, (err) => err);
};

await compress();
