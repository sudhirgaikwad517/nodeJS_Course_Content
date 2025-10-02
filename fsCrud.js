const fs = require('fs'); //importing the file system module in node js

const operation = process.argv[2]; //getting the operation from the command line arguments

if(operation === "write"){
    const name = process.argv[3];
    const content = process.argv[4];
    const fullname = "files/"+name+".txt";
    fs.writeFileSync(fullname,content);
}
else if(operation === "read"){
    const name = process.argv[3];
    const fullname = "files/"+name+".txt";
    const data = fs.readFileSync(fullname,'utf-8');
    console.log(data);
}
else if(operation === "update"){
    const name = process.argv[3];
    const content = process.argv[4];
    const fullname = "files/"+name+".txt";
    fs.appendFileSync(fullname,content);
}
else if (operation === "delete"){
    const name = process.argv[3];
    const fullname = "files/"+name+".txt";
    fs.unlinkSync(fullname);

}
else{
    console.log("Invalid operation. Please use write, read, update, or delete.");
}
// fs.writeFileSync('myfile.txt','Hello , world'); //writing the file synchronously using the writeFileSync function of the fs module
// fs.unlinkSync('myfile.txt'); //deleting the file synchronously using the unlinkSync function of the fs module
// const data = fs.readFileSync('myfile.txt','utf-8'); //reading the file synchronously using the readFileSync function of the fs module
// console.log(data); //printing the output of the writeFileSync function on the console

// fs.appendFileSync('myfile.txt','\nHello , world this is my first file operation in node js'); //appending the file synchronously using the appendFileSync function of the fs module