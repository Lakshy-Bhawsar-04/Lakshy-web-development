//import fs module
const fs = require('fs');


console.log("1. process 1");
console.log("2. process 2");
// this is non blocking read file function :
fs.readFile("./NodeJs/myUserdata.json","utf8",(err,data)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log(data);
    }
})
console.log("3. process 3");

console.log("4. process 4");
console.log("5. process 5");
console.log("6. process 6");
console.log("7. process 7");