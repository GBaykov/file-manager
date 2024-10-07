import fs from "fs";
import { readdir } from "node:fs/promises";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const { stdout } = process;
import { createReadStream } from "fs";

const read = async () => {
  const fileForRead = path.join(__dirname, "files", "fileToRead.txt");
  if (fs.existsSync(fileForRead)) {
    const input = createReadStream(fileForRead, "utf-8");
    input.on("data", (chunk) => stdout.write(chunk));
    input.on("error", (error) => console.log("Error", error.message));
  } else throw new Error("FS operation failed");
};

await read();
