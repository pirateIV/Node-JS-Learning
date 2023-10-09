const path = require('node:path')
console.log(path.sep)

const filePath = path.join('content', 'subfolder', 'test.txt')
console.log(filePath)


// const baseName = path.basename(filePath)

// get basename without file extension
const baseName = path.basename(filePath, '.txt')
console.log(baseName)

const absolutePath = path.resolve(__dirname, 'content', 'subfolder', 'test.txt')
console.log(absolutePath)