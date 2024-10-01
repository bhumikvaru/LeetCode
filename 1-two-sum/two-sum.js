var twoSum = function(nums, target) {
    for(let i = 0;i<nums.length;i++)
    {
    if(nums.slice(i+1).indexOf(target-nums[i])!== -1)      
    {   
    console.log(nums.slice(i+1));
    console.log("nums",nums)
    console.log(target-nums[i])
    console.log(i, nums.indexOf(target-nums[i],i+1))
         return [i, nums.indexOf(target-nums[i],i+1)]
}   
 }
}
