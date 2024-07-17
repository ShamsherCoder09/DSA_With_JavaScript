

function twoSum(nums, target){
    const numObj={};
    for(let i=0; i<nums.length; i++){
        const num = nums[i];
        const compliment = target-num;
        if(numObj.hasOwnProperty(compliment)){
            return [numObj[compliment],i];
        }
        numObj[num] = i;

    }
    return [];
}

console.log(twoSum([4,5,10],9));

//  const ans = twoSum([4,5,10],9)
//  console.log(ans);
