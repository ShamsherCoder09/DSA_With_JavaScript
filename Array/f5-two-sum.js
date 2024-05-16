
function twoSumAdd(nums, target){
    const myObject ={};
    for(let i=0; i<nums.length; i++){
        const num = nums[i];
        const complement = target - num;
        if(myObject.hasOwnProperty(complement)){
            return [myObject[complement],i];
        }
        myObject[num] = i;
    }
    return [];
}

console.log(twoSumAdd([4,5,10],9));