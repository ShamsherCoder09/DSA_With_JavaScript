

function itemInComman(arr1, arr2){
    const obj = {};
    for(let i=0; i<arr1.length; i++){
        obj[arr1[i]]=true;
    }
    for(j=0; j<arr2.length; j++){
        if(obj[arr2[j]]) return true;
    }
    return false;
}

console.log(itemInComman([1,2,3],[9,4,6]));