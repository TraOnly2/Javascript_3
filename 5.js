const { writeFile } = require("fs");
const readFileAsync = require("./3");
 
readFileAsync('input.txt', (content1)=>{
    const modefiedContext1 = content1 + "\nHey you";

    writeFile('output1.txt', modefiedContext1, ()=>{
        readFileAsync('output1.txt', (content2)=>{
            const modefiedContext2 = content2 + "\nHello my name is...";

            writeFile('output2.txt', modefiedContext2, ()=>{
                readFileAsync('output2.txt', (finalRead)=>{
                    console.log(`${finalRead}\n`)
                })
            })
        })
    })
})