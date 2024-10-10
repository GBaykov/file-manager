import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
import readline from "readline";
import process from "process";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const fileManager = () => {
  const user_name = process.env.npm_config_username;
  console.log(`Welcome to the File Manager,${user_name}!`);

  // create the IO interface
  // also specify the input and output sources
  const commandLineIO = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  function questionAnswer() {
    commandLineIO.question(`You are currently in ${__dirname} `, (answer) => {
      console.log(`You name is ${answer}`);
      if (answer == ".exit") {
        commandLineIO.close();
      } else questionAnswer();
    });
  }
  questionAnswer();

  process.on("exit", (code) => {
    console.log(`Thank you for using File Manager, ${user_name}, goodbye!`);
  });

  // show a question to the user
  //   commandLineIO.question(`You are currently in ${__dirname}`, (answer) => {
  //     console.log(`You name is ${answer}`);
  //   });
};

fileManager();
