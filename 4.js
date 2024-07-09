const fs = require('node:fs');


function writeFile(filepath,content, callback){
    fs.writeFile(filepath, content,'utf-8',(err) => {
        if(err){
            console.log(err);
            return;
        }
            callback();
        
        
    });
}

writeFile('write.txt',"HHHH",() => {
    return;
})

module.exports = writeFile;