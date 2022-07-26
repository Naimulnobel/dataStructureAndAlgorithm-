//sliding window
function slidingWindow(arr, k) {
    let maxSum = 0;
    let tempSum = 0;
    if (arr.length<k) {
        return 0;
    }
    for(let i=0; i<k; i++) {
        maxSum += arr[i]
    }
    tempSum = maxSum;
    for(let i=k; i<arr.length; i++) {
        tempSum = tempSum - arr[i-k] + arr[i];
        console.log(arr[i-k] +  arr[i])
        maxSum = Math.max(maxSum, tempSum);
        // console.log(maxSum, tempSum);
    }
    return maxSum;

}
const arr=[1,1,1,1,2,2,3,4,5,6,7,8,9,10];
console.log(slidingWindow(arr, 3));