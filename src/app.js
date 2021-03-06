#! /usr/bin/env node

// Importing file system lib and shell interaction lib
const fs = require("fs");
const rl = require("readline-sync");
const u = require("./utils");
const {
  doUnion,
  doIntersection,
  doBelongs,
  doSubset,
  doProperSubset,
  doCartesianProduct,
  doPowerset
} = require("./operations");

// Getting user input from argv
const userArgs = process.argv.slice(2);
const fileName = "test.txt"; //userArgs[0];
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

let sets = u.stringToSets(raw);

let exit = false;
while (!exit) {
  console.clear();
  console.log(sets);
  console.log(" ----------------------------------- ");
  console.log("| What would you like to do?        |");
  console.log("| 0 - Quit                          |");
  console.log("| 1 - Union                         |");
  console.log("| 2 - Intersection                  |");
  console.log("| 3 - Belongs                       |");
  console.log("| 4 - Subset                        |");
  console.log("| 5 - Proper Subset                 |");
  console.log("| 6 - Cartesian Product             |");
  console.log("| 7 - Powerset                      |");
  let input = rl.question("> ");
  switch (input) {
    case "0":
      exit = true;
      break;
    case "1":
      doUnion(sets);
      rl.question("Press Enter to continue...");
      break;
    case "2":
      doIntersection(sets);
      rl.question("Press Enter to continue...");
      break;
    case "3":
      doBelongs(sets);
      rl.question("Press Enter to continue...");
      break;
    case "4":
      doSubset(sets);
      rl.question("Press Enter to continue...");
      break;
    case "5":
      doProperSubset(sets);
      rl.question("Press Enter to continue...");
      break;
    case "6":
      doCartesianProduct(sets);
      rl.question("Press Enter to continue...");
      break;
    case "7":
      doPowerset(sets);
      rl.question("Press Enter to continue...");
      break;
  }
}
