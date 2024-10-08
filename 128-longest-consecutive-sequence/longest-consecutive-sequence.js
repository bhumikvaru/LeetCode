/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
    if (nums.length === 0) return 0;
    if (nums.length === 1) return 1;
    const numsSet = new Set(nums);
    let maxlength = 0;
    let count = 1;
    for (let num of numsSet) {
        console.log(num)
        if (!numsSet.has(num - 1)) {
            count = 1;
            let current = num;
            while(numsSet.has(current+1))
            {
                count++;
                current = current+1;
            }
            maxlength = Math.max(count, maxlength);
    }
    }
    if (count > 0)
        maxlength = Math.max(count, maxlength);

    // console.log(maxlength)
    return maxlength;
};