const fs = require('fs');

//nonblocking

console.log("process 1")
console.log("process 2")

fs.readFile("./data.txt","utf8",(err,data)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log(data);

    }
});
console.log("process 3")
console.log("process 4")


//blocking

// console.log("step 1")
// console.log("step 2")

// const data = fs.readFileSync('./data.txt','utf8');
// console.log(data)
// console.log("step 3")
// console.log("step 4")

