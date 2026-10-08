//import fs module

const fs = require('fs');


//nonblocking
fs.appendFile('./data.txt',"\n nappend data using nonblocking funciton\n",(err)=>{
    if(err){
        console.log("append file error : ",err)
    }
});


//blocking

// fs.appendFileSync('./data.txt',"\nappend data using blocking funciton\n")
