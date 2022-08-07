// function countDown(num){
//     if(num<=0){
//         return;
//     }
//     console.log(num);
//     countDown(num-1);   


// }
// countDown(10);
function collectOdd(arr){
    let result = [];
    function helper(helperInput){
        if(helperInput.length===0){
            return;
        }
        if(helperInput[0]%2!==0){
            result.push(helperInput[0]);
        }
        helper(helperInput.slice(1));
    }
    helper(arr);

    return result;
}
console.log(collectOdd([1,2,3,4,5,6,7,8,9,10]));

function maxPower(num,power){
    if(power===0){
        return 1
    }
    if(power===1){
        return num
    }
    return num*maxPower(num,power-1)
}
console.log(maxPower(2,0))
    
function factorial(num){
    if(num===0){
        return 1
    }
    return num*factorial(num-1)
}
//write a function with a recursive call that takes in a number and returns the factorial of that number
function productOfArray(arr) {
    if(arr.length === 0) {
        return 1;
    }
    return arr[0] * productOfArray(arr.slice(1));
}
function recursiveRange(num) {
    if(num === 1) {
        return 1;
    }
    return num + recursiveRange(num - 1);
}