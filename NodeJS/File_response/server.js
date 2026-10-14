//import important module for file response

const http = require('http');
const fs = require('fs');
const path = require('path');

//port

const PORT = 3234;

//create server for http request

const server = http.createServer((req, res) => {
    if (req.method == "GET" && req.url == "/textdata") {
        const filePath = path.join(__dirname, "TextData.txt");
        // console.log(filePath);

        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end("Error : ", err);
            }
            else {
                res.writeHead(200, { 'Content-Type': 'text/plain' });
                res.end(data);

            }
        })

    } else if (req.method == "GET" && req.url == "/htmldata") {
        const filePath = path.join(__dirname, "page.html");
        //console.log(filepath)

        fs.readFile(filePath, "utf8", (err, data) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end("Error : ", err);
     z       }
            else {
                res.writeHead(200, { 'Content-Type': 'application/html' });
                res.end(data);
            }
        })
    } else if (req.method == "GET" && req.url == "/jsondata") {
        const filePath = path.join(__dirname, "data.json");

        fs.readFile(filePath, "utf8", (err, data) => {
            if (err) {
                res.writeHead(500, {'Content-Type': 'text/plain' });
                res.end("Error : ", err);
            }
            else {
                res.writeHead(200, {'Content-Type': 'application/json' });
                res.end(data)
            }
        })
    }
});

server.listen(PORT, () => {
    console.log(`server is working on http://localhost:${PORT}`);
})


// server.listen(PORT, "localhost", () => {
//     console.log(`server start on http://localhost:${PORT}`);
// })