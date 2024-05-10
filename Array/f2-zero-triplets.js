/// find zero triplets

function zeroTriplets(arr){
    let found = false;

    for(let i=0; i<arr.length-2; i++){
        for(let j=0; j<arr.length-1; j++){
            for(let k=0; k<arr.length; k++){
                if(arr[i]+arr[j]+arr[k]===0){
                    console.log(arr[i],arr[j], arr[k]);
                    found = true;
                }
            }
        }
    }
    if(!found){
        console.log("No Triplets")
    }
}

let arr = [0,-1,2,-3,1];
zeroTriplets(arr);