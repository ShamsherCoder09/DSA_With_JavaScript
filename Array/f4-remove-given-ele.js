

function removeGivenEle(arr,val){
    let i=0;
    for(let j=0; j<arr.length; j++){
        if(arr[j] !== val){
            arr[i] = arr[j];
            i++;
        }
    }
    return i;
}

const arr = [3,2,2,3];
const val = 2; 
let len =removeGivenEle(arr, val);
console.log(arr.slice(0,len));