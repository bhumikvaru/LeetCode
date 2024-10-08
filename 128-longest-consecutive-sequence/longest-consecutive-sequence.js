/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    if(nums.length === 0) return 0;
    if(nums.length === 1) return 1;
    nums= nums.sort((a,b) => a-b);
    let maxlength = 0;
    let count = 1;
    console.log(nums)
    for(let i=1;i<nums.length;i++)
    {
        if(nums[i] === (nums[i-1]+1))
        {
            console.log("nums[i]",nums[i])
            console.log("count updated")
            count++;
        }
        else if(nums[i] === nums[i-1]){}
        else{
            console.log("broken here", nums[i])
            maxlength = Math.max(maxlength,count)
            count =1;
        }
    }
    if(count>0)  maxlength = Math.max(maxlength,count)

    return maxlength;
};