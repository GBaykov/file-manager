import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
import readline from "readline";
import process from "process";
import { read } from "../fs/read.js";
import { create } from "../fs/create.js";

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
      read(path.join(__dirname, args[0]));
    } else if (comand === "add") {
      create(args[0], __dirname);
    } else if (comand === ".exit") {
      commandLineIO.close();
    } else {
      console.log("Invalid input");
    }
  };

  commandLineIO.on("line", (string) => {
    const [comand, ...args] = string.split(" ");
    console.log(`You are currently in ${__dirname} `);
    comandsManager(comand, args);
  });

  process.on("exit", (code) => {
    console.log(`Thank you for using File Manager, ${user_name}, goodbye!`);
  });
};

fileManager();
