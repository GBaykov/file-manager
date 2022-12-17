import crypto from "crypto";
import fs from "fs";
import { fileURLToPath } from "url";
import { dirname } from "path";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const calculateHash = async () => {
  let hash = crypto.createHash("sha256");
  let filename = __dirname + "/files/fileToCalculateHashFor.txt";
  const dat = fs.ReadStream(filename);
  dat.on("data", function (data) {
    hash.update(data);
  });
  dat.on("end", function () {
    console.log(hash.digest("hex"));
  });
};

await calculateHash();
