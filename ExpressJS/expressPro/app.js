//import express module for creating app

const express = require('express');

// create express application

const app = express();

// console.log(app);

// create PORT
const PORT = 5645;

//import json file data
const user = require('./user.json')

// create diffrent routes
app.get('/', (req, res) => {
    // console.log(req);
    res.send("this is home page")
})

app.get('/about', (req, res) => {
    const htmlData = `<h1 style="color:blue">This is About page</h1>`
    res.send(htmlData);
})

app.get('/contact',(req,res)=>{
    const jsonData = {"reponse code" : 222 , "Data" : "This is contact page"};
    res.json(jsonData);
})

app.get('/user',(req,res)=>{
    res.json(user);
})

app.get('/userhtml', (req,res)=>{
    const html = `<table border="1">
        <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Gender</th>
        </tr>

       ${user.map((data)=>
        ` <tr>
            <td>${data.id}</td>
            <td>${data.first_name} ${data.last_name}</td>
            <td>${data.email}</td>
            <td>${data.gender}</td>
        </tr>` ).join("") }
        
     </table>`

     res.send(html);
})

//create listen server on given PORT

app.listen(PORT, () => {
    console.log(`server is working http://localhost:${PORT}`);
})