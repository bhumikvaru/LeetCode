/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    let k=-1,l;
    for(let i = 0;i<nums.length-1;i++)
    {
        if(nums[i]<nums[i+1])
            {k = i;}
    }
    for(let i = 0;i<nums.length;i++)
    {
        if(nums[k]<nums[i])
            {l = i;}
    }
    if(k===-1)
    return nums.reverse();

    let temp = nums[l];
    nums[l] = nums[k];
    nums[k] = temp;
    reverse(nums,k+1, nums.length-1)
    console.log(k)
    console.log(l)

};

function reverse(nums, startIndex,endIndex)
{
    while(startIndex<endIndex)
    {
        let temp = nums[startIndex];
        nums[startIndex]= nums[endIndex];
        nums[endIndex]= temp;
        startIndex++;
        endIndex--;
    }
    return nums;
}