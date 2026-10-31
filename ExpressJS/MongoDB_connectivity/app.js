const express = require('express');
const mongoose = require('mongoose');


const app = express();
const port = 3456;

app.use(express.static("public"));
//middleware use  
app.use(express.urlencoded({extended : true}));
app.use(express.json())

//connect mongoDB using mongoose
mongoose.connect('mongodb://127.0.0.1:27017/resDB').then(() => {
    console.log("MongoDB Connected");
}).catch((err) => {
    console.log(err);
})

//create schema using mongoose
const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    mobile: {type: String , required: true},
    password: {type: String , required: true}
})

                 
 const User = mongoose.model('User', UserSchema);
 const cus = mongoose.model('customer',UserSchema);
 const Ad = mongoose.model('Admin', UserSchema);


// post route
app.post('/register', async (req,res)=>{
    const name = req.body.name;
    const email = req.body.email;
    const mobile = req.body.mobile;
    const password = req.body.password;
    const cpassword = req.body.cpassword;

    if(password !== cpassword){
        res.status(400).send(`password and confirm password are mismatch so please enter same value in password and confirm password`)
    }else{
        const newuser = new User ({name,email,mobile,password});

        try{
            const savedUser = await newuser.save();
            res.status(201).json(savedUser);
        }catch(err){
            res.status(400).send("Error creating data");

        }
    }

})

app.get('/allusers',async (req,res)=>{
    try{
        const users = await User.find();
        res.status(200).json(users);

    }catch(err){
       res.status(500).send(`Internal server error: ${err.message}`);
    }
})

//put method for update all data
app.put('/update/:id' ,async (req,res)=>{
    const {id} = req.params;
    const {name,email,mobile,password} = req.body;

    try{
        const updateUser = await User.findByIdAndUpdate(id,{name,email,mobile,password});
        const newData  = await User.findById(id);
        console.log(newData);

        if(!updateUser){
            return res.status(404).send(`User with Id ${id} is not found`);
        }else{
            res.status(200).send({"message":"Data updated successfully","data":newData});

        }
    }catch(err){
        res.status(400).send(`Error:`,err);
    }
})

// patch method for update all data
app.patch('/update/:id', async (req, res) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );

        if (!updatedUser) {
            return res.status(404).send("User not found");
        }

        res.status(200).json({
            message: "Data updated successfully",
            data: updatedUser
        });
    } catch (err) {
        res.status(400).send("Error updating data");
    }
});

app.listen(port, () => {
    console.log(`server is running on http://localhost:${port}`);
})                                                                                                                                                                                                                                                                                                                         