/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
    let map = new Map();
    for(let i =0;i<nums.length;i++)
    {
        if(map.has(nums[i]))
            map.set(nums[i], map.get(nums[i]) + 1)    
            else
             map.set(nums[i], 1)
    }
    const result=[];
    for(elem of map)
    {
        console.log(elem)
        if (elem[1] > Math.floor(nums.length/3))
        result.push(elem[0])
        if(result.length ===2) break;
    }
    return result;
};