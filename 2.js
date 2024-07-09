// const arr = [2,3,6,7,8,9,20]

// function Number(arr,callback){
//     return arr.filter(callback);
// }
// function evenNumber(numbers){
//     return numbers % 2 === 0
// }

// const showResult = Number(arr,evenNumber)
// console.log(showResult);



const arr = [2,3,6,7,8,9,20]

function EvenNumber(arr,callback){
    let resultEven = [];
    for(let i = 0;i < arr.length ; i++){
        if(callback(arr[i])){
            resultEven.push(arr[i]);
        }
    }
    return resultEven;
}


function EvenNum(num){
    return num % 2 == 0;
}

const result = EvenNumber(arr,EvenNum);
console.log(result);