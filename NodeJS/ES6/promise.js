const promise = new Promise((resolve,reject)=>{
    setTimeout(()=>resolve("Done"),1000)
});

promise.then(result=>console.log(result)).catch(err=>console.log(err));
 