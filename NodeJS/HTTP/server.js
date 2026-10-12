//import http module

const http = require('http');

//create port
const PORT = 3443;

//create server using http method

// console.log(http);

const server = http.createServer((req, res) => {
    //console.log(req)
    //set the response HTTP header with a status code and content type

    // res.writeHead(responseCode,content Type);

    if (req.method == 'GET') {
        if (req.url == "/") {
            res.writeHead(200, { "Content-Type": "text/plain" });
            res.end("This is Home Page")
            
        } else if (req.url == "/about") {
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(`<h1 style="color:red;">This is About Page</h1>`)

        } else if (req.url = "/contact") {
            res.writeHead(200, { "Content-Type": "text/json" });
            res.end(`"{"pagetitle":"Content Page","message":"This is Contact Page"}`);

        } else {
            res.writeHead(404, { "Content-Type": "text/text" });

            res.end(`404 (${req.url}) Not found`)
        }
    }
})

//listen method to call server start

server.listen(PORT, "localhost", () => {
    console.log(`server start on http://localhost:${PORT}`);
})