// Fs - file system module

const { readFile, writeFile, write } = require("node:fs");

console.log('start')
readFile("./content/first.txt", "utf8", (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  const first = data;
  readFile("./content/second.txt", "utf8", (err, data) => {
    if (err) {
      console.log(err);
      return;
    };
    const second = data
    writeFile('./content/written.txt',
      `Here is are files: ${first}, ${second}`, (err, data) => {
        if(err) {
          console.log(err)
          return
        }
        // return data
        console.log('done with this task')
      })
  });
});

console.log('starting next task')
// It is unsafe to use fs.writeFile() multiple times on the same file without waiting for the callback. For this scenario, createWriteStream is recommended.

// writeFile('./content/written.txt', 'this the written text', (err, data) => {
//   if (err) {
//     console.log(err)
//     return
//   }
//   return
// })
