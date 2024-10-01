/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
    let hashMap = {};
    for (let i = 0; i < nums.length; i++) {
        if (hashMap[nums[i]])
            hashMap[nums[i]] = hashMap[nums[i]] + 1;
        else
            hashMap[nums[i]] = 1
    };
    let index = 0;
    let count = 0;
    for (set in hashMap) {
        while (count<hashMap[set])
        {
            nums[index] = parseInt(set);
            index++;
            count++;
        }
        count = 0;
    }

    console.log(hashMap)
};