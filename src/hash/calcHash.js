import crypto from "crypto";
import fs from "fs";
import { fileURLToPath } from "url";
import { dirname } from "path";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const calculateHash = async (path_to_file) => {
  let hash = crypto.createHash("sha256");
  const dat = fs.ReadStream(path_to_file);

  if (!fs.existsSync(path_to_file)) {
    console.log("Operation failed");
  } else {
    dat.on("data", function (data) {
      hash.update(data);
    });
    dat.on("end", function () {
      console.log(hash.digest("hex"));
    });
  }
};
