const fs = require('fs'); //importing the file system module in node js
const os = require('os'); //importing the os module in node js


fs.writeFileSync('dummy.txt','Some dummy text'); //writing the file synchronously using the writeFileSync function of the fs module
console.log(os.platform()); //printing the platform of the operating system using the platform function of the os module
console.log(os.arch()); //printing the architecture of the operating system using the arch function of the os module
console.log(os.cpus()); //printing the cpu information of the operating system using the cpus function of the os module
console.log(os.freemem()); //printing the free memory of the operating system using the freemem function of the os module
console.log(os.hostname()); //printing the total memory of the operating system using the totalmem function of the os module