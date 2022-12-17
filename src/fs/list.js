import fs from "fs";
import { readdir } from "node:fs/promises";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const { stdout } = process;

const list = async () => {
  fs.access(path.join(__dirname, "files"), async function (err) {
    if (err && err.code === "ENOENT") throw new Error("FS operation failed");

    const files = await readdir(path.join(__dirname, "files"));
    for (const file of files) {
      //   stdout.write(file);
      console.log(file);
    }
  });
};

await list();
