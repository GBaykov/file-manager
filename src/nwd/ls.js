import { readdir } from "node:fs/promises";

export const ls = async () => {
  const data = await readdir(process.cwd(), { withFileTypes: true });

  const folders = [];
  const files = [];

  for (const file of data) {
    const stats = await stat(path);
    if (stats.isDirectory()) {
      folders.push({
        name: file.name,
        type: "directory",
      });
    } else {
      files.push({
        name: file.name,
        type: "file",
      });
    }
  }

  folders.sort((a, b) => a.name.localeCompare(b.name));
  files.sort((a, b) => a.name.localeCompare(b.name));

  console.table([...folders, ...files]);
};
