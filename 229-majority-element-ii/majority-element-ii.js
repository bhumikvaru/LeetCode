/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
    let count1 = 0;
    let elem1 =0;
    let count2=0;
    let elem2 = 0;
    for(let i=0;i<nums.length ;i++)
    {
        if(count1 ===0 && elem2 != nums[i])
        {count1++; elem1 = nums[i]}
        else if(count2 ===0 && elem1 != nums[i])
        {count2++; elem2 = nums[i]}
        else if(elem1 === nums[i])
        count1++;
        else if(elem2 === nums[i])
        count2++;
        else 
            {
                count1--; count2--;
            }

            console.log("nums", nums[i]);
            console.log("element1", elem1);
            console.log("count1", count1);
            console.log("element2", elem2);
            console.log("count2", count2);
    }
    let result = [];
    count1 =0, count2 =0;
    for(let i=0;i<nums.length;i++)
    {
        if(nums[i] === elem1)  count1++;
        else if(nums[i] === elem2) count2++;
    }

    if(count1 > Math.floor(nums.length/3))
    result.push(elem1)
    if(count2 > Math.floor(nums.length/3))
    result.push(elem2)
    console.log(result);
    return result;
};