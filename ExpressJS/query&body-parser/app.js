const express = require('express');
const app = express();

const port = 4545;

// use body-parser middlware to get body data

const bodyParser = require('body-parser');


app.use(express.urlencoded({extended : true}));

app.use(bodyParser.json());

app.get('/' , (req,res)=>{
    res.send("This is home page")
})

app.get('/login' , (req,res) =>{
    console.log(req.body);
    res.send(req.body);

    console.log(req.query);
    res.send(req.query);

})

app.post('/login' , (req,res)=>{
    console.log(req.body);
    res.send(req.body);

    // console.log(req.query.username);
    // res.send(req.query.username);

})

app.listen(port , ()=>{
    console.log(`server is working http://localhost:${port}`)
})