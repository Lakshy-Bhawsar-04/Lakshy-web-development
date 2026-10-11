// import fs module

const fs = require('fs');

// reading form a file (readable stream)

const readStream = fs.createReadStream('./senderfile.txt');

// Writeing to a file 

const writeStream = fs.createWriteStream('./reciverfile.txt');

// readStream.pipe(writeStream);

//import stream module for transform lower case to uppercase in chunks

const { Transform } = require('stream');

const UpperCaseTransform = new Transform({
    transform(chunk, encoding, callback) {
        this.push(chunk.toString().toUpperCase());
        callback();
    }
})

readStream.pipe(UpperCaseTransform).pipe(writeStream);

readStream.on('end', () => {
    console.log('finished reading')
})