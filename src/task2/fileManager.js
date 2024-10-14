import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
import readline from "readline";
import process from "process";
import { read } from "../fs/read.js";
import { create } from "../fs/create.js";
import { rename } from "../fs/rename.js";
import { copy } from "../fs/copy.js";
import { remove } from "../fs/delete.js";
import { move } from "../fs/move.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const fileManager = () => {
  const user_name = process.env.npm_config_username;
  console.log(`Welcome to the File Manager,${user_name}!`);
  console.log(`You are currently in ${__dirname} `);

  const commandLineIO = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  const comandsManager = (comand, args) => {
    if (comand === "cat") {
      read(args[0]);
    } else if (comand === "add") {
      create(args[0], __dirname);
    } else if (comand === ".exit") {
      commandLineIO.close();
    } else if (comand === "rn") {
      rename(args[0], args[1]);
    } else if (comand === "cp") {
      copy(args[0], args[1]);
    } else if (comand === "mv") {
      move(args[0], args[1]);
    } else if (comand === "rm") {
      remove(args[0]);
    } else {
      console.log("Invalid input");
    }
  };

  commandLineIO.on("line", (string) => {
    const [comand, ...args] = string.split(" ");
    comandsManager(comand, args);
    console.log(`You are currently in ${__dirname} `);
  });

  process.on("exit", (code) => {
    console.log(`Thank you for using File Manager, ${user_name}, goodbye!`);
  });
};

fileManager();
