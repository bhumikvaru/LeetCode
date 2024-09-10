/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let count = 0;
    let candidate;
    for(let i =0;i<nums.length;i++)
    {
        if(count ==0) candidate= nums[i];
        if(nums[i]!== candidate)
        {
            count --;
        }
        else if(nums[i] === candidate)
        {
            count ++;
        }
    }
    return candidate;
};