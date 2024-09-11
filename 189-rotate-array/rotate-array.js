/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    let new_array = [...nums];
    for(let i =0;i<nums.length;i++)
    {
        nums[(k+i)%nums.length] = new_array[i]
    }
    return nums;
};
