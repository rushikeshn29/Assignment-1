const fs= require("fs");
const http= require("http");
const PORT = 8897;


const server= http.createServer((req,res)=>{
switch(req.url){
    case "/":
        //read html file
        fs.readFile('fs_crud.html', function(err, data) {
            res.writeHead(200, {'Content-Type': 'text/html'}) ;
            res.write(data);
            res.end();
          });
          break; 
    //create file
    case "/create": 
        //file already exits
        if(fs.existsSync("neosoft.txt")){
            fs.readFile('fs_crud.html', function(err, data) {
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.write(data);
                res.end(`<html><body><center>Already exists</center></body></html>`);
               
              });
           
        }//when file is not exits
        else{
            fs.writeFile('neosoft.txt',"welcome to neosoft!", (err)=>{
                if(err) throw err
                else 
                {
                    fs.readFile('fs_crud.html', function(err, data) {
                        res.writeHead(200, {'Content-Type': 'text/html'});
                        res.write(data);
                        res.end(`<html><body><center>File Created</center></body></html>`);
                       
                      });

                }
            })
        }
        break;
    //read file content
    case "/read":
        if(fs.existsSync("neosoft.txt")){
            let data=fs.readFileSync("neosoft.txt");
            let t=data;
            fs.readFile('fs_crud.html', function(err, data) {
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.write(data);
                res.end(`<html><body><center>${t}</center></body></html>`);
              
              });
        }
        else{
            fs.readFile('fs_crud.html', function(err, data) {
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.write(data);
                res.end(`<html><body><center>File does not exits</center></body></html>`);
             
              });   
        }
        break;
     //file delete part
     case "/delete" :
        if(fs.existsSync("neosoft.txt")){
            if(fs.existsSync("neosoft.txt")){
                fs.unlink("neosoft.txt",(err)=>{
                    if (err) throw err
                    else {
                        
                        fs.readFile('fs_crud.html', function(err, data) {
                            res.writeHead(200, {'Content-Type': 'text/html'});
                            res.write(data);
                            res.end(`<html><body><center>File deleted</center></body></html>`);
                           
                          });    

                    };
                });
            }
        }
        else{
            fs.readFile('fs_crud.html', function(err, data) {
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.write(data);
                res.end(`<html><body><center>File does not exits</center></body></html>`);
           
              });
        }
        break;
    //file updated part
    case "/append":
        if(fs.existsSync("neosoft.txt")){

           
                fs.appendFile("neosoft.txt","Data Added!",(err)=>{
                    if (err) throw errs
                else {
                    fs.readFile('fs_crud.html', function(err, data) {
                        res.writeHead(200, {'Content-Type': 'text/html'});
                        res.write(data);
                        res.end(`<html><body><center>data updated</center></body></html>`);
                        
                      });
   
                }
                });
            
        }
        else{

            fs.readFile('fs_crud.html', function(err, data) {
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.write(data);
                res.end(`<html><body><center>File does not exits</center></body></html>`);
              
              });
            
        }
        break;

    }
    
   
})
server.listen(PORT,(err)=>{
    if(err) throw err
    else{
        console.log(`server work on ${PORT}`)
    }
})
