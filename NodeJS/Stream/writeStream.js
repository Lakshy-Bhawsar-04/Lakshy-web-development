// import fs module

const fs = require('fs');

//create writeStream

const writeStream = fs.createWriteStream('./stream.txt');

// write some data in file

writeStream.write("this is writeStream data 1\n");
writeStream.write("this is writeStream data 2\n");
writeStream.write("this is writeStream data 3\n");

//end stream

writeStream.end(" finished write data  in  file")


// finish wri process

writeStream.on('finish', () => {
    console.log("data written success in output file ")
})

//error hundle

writeStream.on('error', (err) => {
    console.log("Error : ", err);
})