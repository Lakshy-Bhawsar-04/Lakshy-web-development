//import express module for creating app

const express = require('express');

// create express application

const app = express();

// console.log(app);

// create PORT
const PORT = 5645;

//use middleware
app.use(express.urlencoded({ extended: true }));

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

app.get('/contact', (req, res) => {
    const jsonData = { "reponse code": 222, "Data": "This is contact page" };
    res.json(jsonData);
})

app.get('/user', (req, res) => {
    res.json(user);
})

app.get('/userhtml', (req, res) => {
    const html = `<table border="1">
        <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Gender</th>
        </tr>

       ${user.map((data) =>
        ` <tr>
            <td>${data.id}</td>
            <td>${data.first_name} ${data.last_name}</td>
            <td>${data.email}</td>
            <td>${data.gender}</td>
        </tr>` ).join("")}
        
     </table>`

    res.send(html);
})

app.post('/registration', (req, res) => {
    uname = req.body.username
    pws = req.body.password
    cpws = req.body.cpassword
    email = req.body.email
    mobile = req.body.mobile

    if (pws != cpws) {
        res.status(400).send({ message: "Incorrect Password and confirm password" });

    } else {
        res.status(201).send({
            message: "data succesfully added", data: {
                "username": uname, "email": email, "mobile": mobile

            }
        });
    }
})


app.put('/editall', (req, res) => {
    uname = req.body.username
    pws = req.body.password
    cpws = req.body.cpassword
    email = req.body.email
    mobile = req.body.mobile

    if (pws != 123456) {
        res.status(400).send({ message: "Incorrect Password , so please enter correct password" });
    }
    else {
        res.status(200).send({
            message: "data succesfully added", data: {
                "username": uname, "email": email, "mobile": mobile
            }
        })
    }
})

app.patch('/editone', (req, res) => {
    let uname = req.body.username
    let pws = req.body.password
    let cpws = req.body.cpassword
    let email = req.body.email
    let mobile = req.body.mobile

    if (pws != 123456) {
        res.status(400).send({ message: "Incorrect Password , so please enter correct password" });
    }
    else {
        res.status(200).send({
            message: "data succesfully added", data: {
                "username": uname, "email": email, "mobile": mobile
            }
        })
    }
})

app.delete("/delete", (req, res) => {
    res.status(200).send({ message: "This is a delete page" })
})
//create listen server on given PORT

app.listen(PORT, () => {
    console.log(`server is working http://localhost:${PORT}`);
})