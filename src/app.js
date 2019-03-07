#! /usr/bin/env node

// Importing file system lib and shell interaction lib
const fs = require("fs");
const rl = require("readline-sync");

// Getting user input from argv
const userArgs = process.argv.slice(2);
const fileName = userArgs[0];
const filePath = process.cwd() + "/" + fileName;

if (fileName === undefined) {
  console.log("No file specified.");
  console.log("Exiting...");
  process.exit(1);
}

if (!fs.existsSync(filePath)) {
  console.log("Could not find file.");
  console.log("Exiting...");
  process.exit(1);
}

console.log(fs.readFileSync(filePath, { encoding: "utf8" }));

// while(true){
// let something = rl.question("Say something: ");
// console.log(something);
// }
