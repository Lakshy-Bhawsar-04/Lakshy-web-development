// import express
const Express = require('express');

// create app
const app = Express();

//create PORT
const PORT = 7565;

//create middleware
const mid1=(req,res,next)=>{
    if(req.method=='GET' || req.method=='POST' || req.method=='PUT' || req.method=='PATCH' || req.method=="DELETE"){
        console.log(`${req.method} method is Varified method by Midddleware 1`);
        next(); //jump to get method or next middleware function
    }else{
        console.log("Only allow GET/POST/PUT/PATCH/DELETE method");
        res.send(`Invalid method , please try again`)
    }
}

const mid2=(req,res,next)=>{
    if(req.url=='/' || req.url=='/login' || req.url=='/editall' || req.url=='/editone' || req.url=='/deleteall' ){
        console.log(`URL Varified by Midddleware 2`);
        next();
    }
    else{
        console.log(`${req.url} is un Varified by middleware 2`);
        res.status(404).send(`<h1>404 Page not found</h1>`);

    }
}

// use middleware using app.use()
app.use(mid1)
app.use(mid2)

// get method 
app.get('/',(req,res)=>{
    res.send(`this is home page`)
})

app.post('/login',(req,res)=>{
    res.send(`this is POST method(/post)`)
})

app.put('/editall',(req,res)=>{
    res.send(`this is PUT method(/editall)`)
})

app.patch('/editone',(req,res)=>{
    res.send(`this is PATCH method(/editone)`)
})

app.delete('/deleteall',(req,res)=>{
    res.send(`this is DELETE method(/deleteall)`)
})



app.listen(PORT,()=>{
    console.log(`server is working on http://localhost:${PORT}`)
})