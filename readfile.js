const http = require('http');
const fs = require('fs');
const PORT =8888;
const server =http.createServer((req,res)=>{
    fs.readFile('myfile.html',(err,data)=>{
        res.writeHead(200,{'Content-Type' : 'text/html'})
        res.write(data)
        return res.end();
    })
})
server.listen(PORT,()=>{
    console.log(`work on port : ${PORT}`)
})