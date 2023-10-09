// Fs - file system module

const { readFileSync, writeFileSync } = require("node:fs");
console.log("start");

const first = readFileSync("./content/first.txt", "utf-8");
const second = readFileSync("./content/second.txt", "utf-8");

writeFileSync(
  "./content/result-sync.txt",
  `\nHere is the result:\t\n ${first},\n ${second}`,
  { flag: "a" }
);
console.log("done with this task");
console.log("starting the next one");
