/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
    let uniqueCount = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) uniqueCount += 1;
    }

    let backpoint = nums.length - 1;

    for (let i = 0; i < uniqueCount; i++) {
        if (nums[i] === val) {
            while (nums[backpoint] === val) {
                backpoint = backpoint - 1;
            }
            console.log(nums[backpoint]);
            nums[i] = nums[backpoint];
            backpoint = backpoint - 1;
        }
    }
    return uniqueCount;
};



console.log(removeElement([3, 3], 3))