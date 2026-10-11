//import fs module

const fs = require('fs');

//create a readable stream

const readableStream = fs.createReadStream('./stream.txt','utf8');

//handle data event to process chunks of data

readableStream.on('data',(chunks)=>{
    console.log("data received ",chunks);
})

//handle end event when reading is finished

readableStream.on('end',()=>{
    console.log('reading finish in the file');
})

readableStream.on('error',(err)=>{
    console.log(`error is ${err}`);
})