const fs = require('node:fs')

function readFile(filepath, callback){
    fs.readFile(filepath, 'utf8', (error, data)=>{
        if(error){
            console.log("Erorr read");
            return
        }
        callback(data)
    })
    
}

readFile('input.txt', (data)=>{
    return console.log(data);
})

module.exports = readFile;