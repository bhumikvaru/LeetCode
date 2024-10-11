/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    let total =0;
    for(let i =0;i<nums.length;i++)
    {
        let sum = 0;
        for(let j =i;j<nums.length;j++)
        {
            sum = sum+nums[j];
            if(sum === k)
            total++;
        }
    }
    return total
};