const os = require('node:os')

console.log(os.platform())
// info about current user
const userInfo = os.userInfo()
console.log(userInfo)
// returns the system uptime in seconds
console.log(`the system uptime  is ${os.uptime()} secs`)

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
}

console.log(currentOS)