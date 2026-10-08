// import fs module

const fs = require('fs');
//console.log(fs);
// write file using readFile() function
//non blocking

fs.writeFile('./data.txt',"writeFile function(non blocking) data",(err)=>{
    if(err){
        console.log(err);
    }
});

// blocking

// const red = fs.writeFileSync('./data.txt',"\n 2. data using blocking function");
// console.log(red)