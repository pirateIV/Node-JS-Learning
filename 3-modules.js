// CommonJS, every file is a module
// Modules - Encapsulated code (only share minimum)

const names = require('./4-names')
const sayHi = require('./5-utils')
const data  = require('./6-alternative')
require('./7-mind-grenade')

const { john, peter } = names
console.log(data)

sayHi('susan')
// sayHi(peter)
sayHi(names.john)
// sayHi(john)
sayHi(names.peter)

console.log(names)