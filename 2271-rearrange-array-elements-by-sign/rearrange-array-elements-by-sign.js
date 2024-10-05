/**
 * @param {number[]} nums
 * @return {number[]}
 */
var rearrangeArray = function(nums) {
    let newArray = new Array(nums.length);
    let posIndex=0,negIndex=1;
    for(let i =0 ;i<nums.length;i++)
    {
        if(nums[i]>0)
{            newArray[posIndex] = nums[i];posIndex+=2;
}        else    
{            newArray[negIndex] = nums[i];negIndex+=2;
}    };

    return newArray;
};