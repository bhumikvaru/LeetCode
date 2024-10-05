/**
 * @param {number[]} nums
 * @return {number[]}
 */
var rearrangeArray = function(nums) {
    let positive = [];
    let negative = [];
    for(let i =0 ;i<nums.length;i++)
    {
        if(nums[i]>0)
            positive.push(nums[i])
        else    
            negative.push(nums[i])
    };
    for(let i =0,j=0;i<nums.length;i++,j++)
    {
        nums[i] = positive[j];i++
        nums[i] = negative[j];
    }
    console.log(nums)
    return nums;
};