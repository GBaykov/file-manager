import fs from "fs";
import path, { dirname } from "path";
import zlib from "zlib";
import { pipeline } from "stream";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const decompress = async () => {
  const input = fs.createReadStream(
    path.join(__dirname, "/files", "archive.gz")
  );
  const output = fs.createWriteStream(
    path.join(__dirname, "/files", "fileToCompress.txt")
  );
  const gzip = zlib.createGunzip();

  pipeline(input, gzip, output, (err) => err);
};

await decompress();
