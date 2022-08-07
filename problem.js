// finding second largest number in an array
function scoendlargest(arr) {
   let max = arr[0]
   let max2=arr[0]
    for(let i=1;i<arr.length;i++){
        if(arr[i]>max){
            max2=max
            max=arr[i]
        }else if(arr[i]>max2){
            max2=arr[i]
        }
    }
    return max2
}
console.log(scoendlargest([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));