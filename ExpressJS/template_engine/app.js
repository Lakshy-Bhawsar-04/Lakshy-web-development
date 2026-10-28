const Express = require('express');
const app = Express();
const port = 4565;

// set template path
app.set('views', './views')

// set ejs template
app.set('view engine', 'ejs');

// get type request 
app.get('/', (req, res) => {
    res.render('index', { title: "User Details", username: "Lakshy Bhawsar", address: "07,navlakha indore", email: "lak@gmail.com", mobile: 9432738393 });
})

app.get("/birthday", (req, res) => {

    res.render("Birthday ", {
        name: "Lakshy Bhawsar",
        date: "4 September 2027",
        time: "7:00 PM",
        venue: "Royal Garden, Indore"
    });

});

app.listen(port, () => {
    console.log(`server is running http://localhost:${port}`)
})