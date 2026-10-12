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
     }  else if (req.method == "POST") {
        if (req.url == "/login") {
            res.writeHead(200, { "Content-Type": "text/plain"});
            res.end(`${req.method}: This is Login page`);
        }
        else if (req.method == "PUT") {
            if (req.url == "/editall") {
                res.writeHead(200, { "Content-Type ": "text/plain"});
                res.end(`${req.method}:This is edit all page`);
            }
        }else if(req.method == "PATCH"){
            if(res.url == "/edit"){
                res.writeHead(200,{"Content-Type" : "text/plain"});
                res.end(`${req.method}:This is edit page`);
            }
        }else if(req.method == "DELETE"){
            if(res.url == "/delete"){
                res.writeHead(200,{"Content-Type" : "text/plain"});
                res.end(`${req.method}: This is delete page`);
            }
        }else{
            res.writeHead(405,{"Content-Type":"text/plain"});
            res.end(`${req.method}:method not allowed`);
        }
    }
})

//listen method to call server start

server.listen(PORT, "localhost", () => {
    console.log(`server start on http://localhost:${PORT}`);
})