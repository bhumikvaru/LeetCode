var twoSum = function(nums, target) {
    for(let i = 0;i<nums.length;i++)
    {
    if(nums.indexOf(target-nums[i], i+1)!== -1)      
    {   
         return [i, nums.indexOf(target-nums[i],i+1)]
}   
 }
}
