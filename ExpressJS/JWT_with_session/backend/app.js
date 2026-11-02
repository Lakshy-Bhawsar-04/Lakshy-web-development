// import packages for express project

const express = require('express');
const mongoose = require('mongoose')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
//const bodyParser = require('body-parser');
const session = require('express-session')

const app = express();
//app.use(bodyParser.json());
app.use(express.json());

const PORT = process.env.PORT || 3443;
// const JWT_SECRET = 'your_jwt_secret';

app.use(session({
    secret: 'your_session_secret',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}));

//connect mongoDB
mongoose.connect('mongodb://127.0.0.1:27017/jsonwebtoken').then(() => {
    console.log("MongoDB Connected");
}).catch((err) => {
    console.log(err);
});

// create schema 
const UserSchema = new mongoose.Schema({
    username: { type: String, unique: true },
    password: String
})

const User = mongoose.model('User', UserSchema);

// create API
// registration API
app.post('/register', async (req, res) => {
    const { username, password } = req.body;
    // console.log(username);
    // console.log(password);

    if (!username || !password) {
        return res.status(400).json({ message: 'please provoid username and password Both' });

    }
    //existing username
    const existingUser = await User.findOne({ username });
    if (existingUser) {
        return res.status(400).json({ message: 'username is already Exist , so please enter another username' });
    }

    const salt = await bcrypt.genSalt(10);
    // console.log(salt);
    const hashedPassword = await bcrypt.hash(password, salt);
    // console.log(hashedPassword);

    const newUser = new User({ username, password: hashedPassword });
    await newUser.save();
    res.status(201).json({ message: 'registration successfully' })
})

//login API
app.post('/login', async (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) {
        return res.status(400).json({ message: "Please enter username and password both" });
    }
    const user = await User.findOne({ username });
    // console.log(user);
    if (!user) {
        return res.status(400).json({ message: "username is not exist in our database" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    console.log(isMatch);
    if (!isMatch) {
        return res.status(400).json({ message: "Incorrect password please try again !" });

    }

    const token = jwt.sign({ userId: user._id }, 'your_jwt_secret', { expiresIn: '1h' });

    req.session.token = token;
    req.session.userId = user._id;
    res.json({ message: "Login successfully" });

})

//profile API
app.get('/profile', async (req, res) => {
    if (!req.session.token) {
        return res.status(401).json({ message: "Not authenticated" });
    }

    try {
        const decode = jwt.verify(req.session.token, 'your_jwt_secret');
        // console.log(decode);
        const user = await User.findById(decode.userId).select('-password');
        if (!user) {
            return res.status(404).json({ message: "User not found" })
        }
        res.json({ user });
    }
    catch (err) {
        res.status(401).json({ message: "Invalid session or token" });
    }
})

//logout API
app.post('/logout', (req, res) => {
    req.session.destroy(err => {
        if (err) {
            return res.status(500).json({ message: "Error logging out" });
        }
        else {
            res.json({ message: "Logout successfully" })
        }
    })
});


app.listen(PORT, () => {
    console.log(`server is running on http://localhost:${PORT}`);
})  