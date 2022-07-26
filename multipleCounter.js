function sumZero(arr){
    const left=0;
    const right=arr.length-1;
    while(left<right){
        const sum = arr[left]+arr[right];
        if(sum===0){
            return [arr[left],arr[right]];
        }
        else if(sum>0){
            right--;
        }
        else{
            left++;
        }
    }
}
console.log(sumZero([-3, -2, -1, 0, 1, 2, 3]));
//isSubsequent
