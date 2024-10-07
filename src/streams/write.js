import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const { stdin, stdout } = process;

const write = async () => {
  const paths = path.join(__dirname, "/files", "fileToWrite.txt");
  const output = fs.createWriteStream(paths);
  stdin.on("data", (chunck) => {
    output.write(chunck);
  });
  //   const output = fs.createWriteStream(
  //     path.join(__dirname, "/files", "fileToWrite.txt")
  //   );
  //   console.log(path.join(__dirname, "/files", "fileToWrite.txt"));
  //   let data = "";
  //   strim.on("data", (chunk) => (data += chunk));
  //   strim.on("end", output.write(data));
};

await write();
