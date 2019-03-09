const rl = require("readline-sync");
const union = (allSets, chosenSets) => {
  let result = [];
  for (set of Object.keys(allSets)) {
    if (chosenSets.includes(set)) {
      result.push(...allSets[set]);
    }
  }

  result = result.filter(function(item, pos) {
    return result.indexOf(item) == pos;
  });

  return result;
};

const doUnion = allSets => {
  console.log("Select sets (; to stop): ");
  let sets = [];
  let answer = "";
  while (answer !== ";") {
    answer = rl.question("");
    if (answer === ";") {
      break;
    }
    answer = answer.match(/[a-zA-Z]/g);
    sets.push(answer.toString());
  }

  console.log("Result: ", union(allSets, sets));
};

module.exports = {
  doUnion: doUnion
};
