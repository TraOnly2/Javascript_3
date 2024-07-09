// const arr = [2,3,4,5]
// function FindSquare(arr,callback){
//     const result = new Array(arr.length);
//     for(let i = 0; i < arr.length ; i++){
//         result[i] = callback(arr[i]);
//     }
//     return result
// }
// function square(number){
//     return number * number
// }
// const squareNumber = FindSquare(arr,square);
// console.log(squareNumber);



const arr = [2,3,4,5]
function FindSquare(arr, callback){
    const result = [];
    for(let i = 0; i < arr.length ; i++){
        result[i] = callback(arr[i]);
    }
    return result
}
function square(number){
    return number * number
}
const squareNumber = FindSquare(arr,square);
console.log(squareNumber);