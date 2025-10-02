//simple code in js 

var fs = require('fs'); //importing the file system module in node js
fs.writeFileSync('myfile.txt','Hello , world'); //writing the file synchronously using the writeFileSync function of the fs module
var content = fs.readFileSync('myfile.txt','utf-8'); //reading the file synchronously using the readFileSync function of the fs module
console.log(content); //printing the output of the writeFileSync function on the console

// console.log("Hello , world"); //printing the output on the console or to display the outpyt we use the cosnole.log function .

function add(a,b){
    return a+b;
}

console.log(add(2,3)); // calling the add function and printing the output on the console .