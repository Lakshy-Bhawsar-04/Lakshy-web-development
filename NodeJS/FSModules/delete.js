const fs = require('fs');

//nonblocking


fs.unlink("./data.txt",(err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("file deleted Successfull");

    }
})



//blocking

 fs.unlinkSync('./data.txt');

