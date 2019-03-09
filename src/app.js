#! /usr/bin/env node

// Importing file system lib and shell interaction lib
const fs = require("fs");
const rl = require("readline-sync");
const u = require("./utils")


// Getting user input from argv
const userArgs = process.argv.slice(2);
const fileName = "test.txt"//userArgs[0];
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

let raw = fs.readFileSync(filePath, { encoding: "utf8" }).toString();

console.log("File read.");

let set = u.stringToSets(raw);

console.log(set);

// const setsExp = /[A-Z][ ]{1,}=[ ]{1,}{.*?}/g;

// const setsArray = raw.match(setExp);

// const elementExp = /[a-z][ ]{1,}=[ ]{1,}[0-9]{1,}/g;

// const elementsArray = raw.match(elementExp);

// while (true) {
//   let something = rl.question("Say something: ");
//   console.log(something);
// }
