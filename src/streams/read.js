import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const read = async () => {
  const strim = fs.createReadStream(
    path.join(__dirname, "/files", "fileToRead.txt"),
    "utf-8"
  );
  let data = "";

  strim.on("data", (chunk) => (data += chunk));
  strim.on("end", () => process.stdout.write(data));
};

await read();
