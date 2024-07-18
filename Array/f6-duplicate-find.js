
function duplicateFind(nums){
    const numObj={};
    for(let num of nums){
        numObj[num] = (numObj[num] || 0) +1
    }
    const duplicateArr = [];
    for(let key in numObj){
        if(numObj[key]>1){
            duplicateArr.push(key);
        }
    }
    return duplicateArr

}

console.log(duplicateFind([1,2,1,3,4,4]));