const fs = require('fs');

//asynchronous read

fs.readFile('example.txt',(err,data)=>{
    if (err) console.log(err)
    else{
        console.log("Asynchronous :" + data.toString())
    }
})

console.log("-------------")
//Synchronous read
let data = fs.readFileSync('example.txt');
console.log("Synchronous :" + data.toString())