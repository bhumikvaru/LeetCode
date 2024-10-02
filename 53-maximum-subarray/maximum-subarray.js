/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    let localsum = nums[0];
    let maxsum = nums[0];
    for (let i = 1; i < nums.length; i++) {
        localsum = Math.max(nums[i],localsum+nums[i])
        maxsum = Math.max(localsum,maxsum)
    }
    return maxsum
};