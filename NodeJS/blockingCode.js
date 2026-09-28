//import fs module for use all filesystem functions
const fs =require('fs');
console.log(fs);

console.log("1. process 1");
console.log("2. process 2");
console.log("3. process 3");
//call readFileSync() function for read file and this function is blocking function
const readData = fs.readFileSync("./NodeJs/myUserdata.json","utf8");
console.log("file data:",readData);

console.log("4. process 4");
console.log("5. process 5");
console.log("6. process 6");
console.log("7. process 7");