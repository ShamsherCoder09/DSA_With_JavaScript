// find longest String 
function findLongestString(stringArray){
    let longestString = "";
    for(let i=0; i<stringArray.length; i++){
        const currentString = stringArray[i];
        if(currentString.length >longestString.length){
            longestString=currentString;
        }
    }
    return longestString;
}

let myString = ["apple","banana","Pea"];
const ans = findLongestString(myString);
document.write(ans);
console.log(ans);