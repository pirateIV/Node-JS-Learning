// npm - global command
// npm --version

// local dependency - use it only in this particular project
// npm i <packageName>

// global dependency
// npm install -g <packageName>
// sudo install -g <packageName>  (mac)

// package json - manifest file (stores important info about project/package)
// manual approach (create package.json in the root, create properties etc.)
// npm init (step by step, press enter to skip)
// npm init -y (everything default)

// const _ = require("lodash");

// const items = [1, [2, [3, [4]]]];
// const newItems = _.flattenDeep(items)
// console.log(newItems)

// const os = require('node:os')

// console.log(os.homedir()) // - C:\Users\Benjamin
// console.log(os.getPriority())
// console.log(os.uptime())
// console.log(os.version())
// console.log((os.cpus()[0].model))
// console.log((os.cpus()[0].speed))
// console.log((os.cpus()[0].times))

// console.log(os.platform()) // -  win32
// console.log(os.totalmem())
// console.log(os.type())
// console.log(os.release())
// console.log(os.hostname())
// // returns the system directory for temporary files
// console.log(os.tmpdir())
// console.log(os.machine())
// console.log(os.userInfo())
// // to get the username access it through the userInfo function
// console.log(os.userInfo().username)

const { readFileSync, writeFileSync } = require("node:fs");
console.log(require('node:fs'))
// const readLine = require('rea')

// const fileOne = readFileSync('./c')

// creating and writing file with writeFileSync is only recommended for debugging p
// purposes just like every other synchronous function in node
writeFileSync(
  "./create-file.txt",
  `This file was created at ${new Date().toLocaleDateString("en-US", {
    day: "numeric",
    year: "numeric",
    month: "long",
    timeZoneName: 'long'
  })}`, {flag: 'a'}
);
