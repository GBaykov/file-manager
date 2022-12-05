import { readdir, copyFile, stat, mkdir } from "node:fs/promises";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
import { createReadStream, createWriteStream } from "fs";

const copy = async () => {
  const firsDir = path.join(__dirname, "files");
  const resultDir = path.join(__dirname, "files_copy");
  copyDir(firsDir, resultDir);

  async function copyDir(firstDir, resultDir) {
    try {
      try {
        await mkdir(resultDir);
      } catch {
        throw Error("FS operation failed");
      }
      const files = await readdir(firstDir);

      for (const file of files) {
        console.log(firstDir);
        const statFile = await stat(path.join(firstDir, file));

        if (statFile.isFile()) {
          createReadStream(path.join(firstDir, file)).pipe(
            createWriteStream(path.join(resultDir, file))
          );
        } else {
          copyDir(path.join(resultDir, file), path.join(resultDir, file));
        }
      }
    } catch (err) {
      console.error(err);
    }
  }
};

await copy();
