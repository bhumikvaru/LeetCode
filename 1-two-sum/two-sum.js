var twoSum = function(nums, target) {
    const hashMap = {};
    for(let i =0;i<nums.length;i++)
    {
        let complement = target-nums[i];
        if(hashMap.hasOwnProperty(complement))
        return [i, hashMap[complement]]
        else
            hashMap[nums[i]] = i;
    }
}
