// find min max 
let myArray = [3,2,4,1];


function findMaxMin(myArray){
    let max = myArray[0];
    let min = myArray[0];
    for(let i=0; i<myArray.length; i++){
        if(myArray[i]>max){
            max = myArray[i];
        }
        if(myArray[i]<min){
            min = myArray[i];
        }
    }
    return [max, min];
}

console.log(findMaxMin(myArray));