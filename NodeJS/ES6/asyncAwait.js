const fetchData=async()=>{
    const promise = await new Promise((resolve,reject)=>{
        setTimeout(()=>resolve("data fetch"),1000)
    });
    console.log(promise)
}

fetchData();