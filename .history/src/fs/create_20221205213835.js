import fs from "fs";
import path from "path";
const create = async () => {
  if (fs.existsSync(path.join(__dirname, "files", "fresh.txt")));
  fs.writeFile(
    path.join(__dirname, "files", "fresh.txt"),
    "I am fresh and young",
    (err) => {
      if (err) throw err;
      console.log("Файл был создан");
    }
  );
};

await create();
