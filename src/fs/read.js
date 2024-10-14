import fs from "fs";
import { readdir } from "node:fs/promises";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const { stdout } = process;
import { createReadStream } from "fs";

export const read = async (file_path) => {
  console.log(file_path);
  const fileForRead = path.join(file_path);
  console.log(fileForRead);
  if (fs.existsSync(fileForRead)) {
    const input = createReadStream(fileForRead, "utf-8");
    input.on("data", (chunk) => stdout.write(chunk));
    input.on("error", (error) =>
      console.log("Operation failed read1", error.message)
    );
  } else console.log("Operation failed read2");
};

// await read();
