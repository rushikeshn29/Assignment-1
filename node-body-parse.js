const http = require('http');
const fs = require('fs');
const { parse } = require('path');
const port = 7000;

const server = http.createServer((req, res) => {
    const url = req.url;
    if(url == '/'){
        res.write('<html> <body> <form action="/data" method="post"> User Name <input type="text" name="uname"/> <input type="submit" value="Submit"/> </form> </body> </html>');

        return res.end();
    }
    else if(url === '/data' && req.method === 'POST'){
        let bodyData = [];
        req.on('data', (chunks) => {
            bodyData.push(chunks);
        });
        req.on('end', () => {
            parseData = bodyData.toString();
            const username = parseData.split('=')[1];
            fs.writeFileSync('uname.txt', username);
        })
        res.setHeader('Location', '/');
        return res.end();
    }
    res.write('<html><body><h2> Hello </h2></body></html>');
    res.end();
})

server.listen(port, err => {
    if(err) throw err;
    console.log(`Server work on ${port}`);
})