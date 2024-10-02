/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    let localsum = 0;
    let maxsum = nums[0];
    for (let i = 0; i < nums.length; i++) {
        console.log("nums[i]", nums[i])
        localsum+=nums[i];
        if(localsum>maxsum) maxsum = localsum;
        if(localsum<0) localsum=0;
        console.log("maxsum", maxsum)
    }
    return maxsum
};