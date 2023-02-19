//Maximum Subarray
//Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.  
//Example:
//Input: [-2,1,-3,4,-1,2,1,-5,4],
//Output: 6
var maxSubArray = function(nums) {
   let sum=nums[0];
    let max=nums[0]
    for(let i=1;i<nums.length;i++){
        sum=Math.max(nums[i],sum+nums[i]);
        max=Math.max(sum,max)
    }
    return max
};
console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))