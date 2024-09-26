/**
 * @param {number[]} nums
 * @return {boolean}
 */
var check = function (nums) {
    let count = 0;
    //only one element will always be sorted
    if (nums.length === 1)
        return true;
    // if the order sequence is broken more than once its not rotated
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > (nums[(i + 1) % nums.length])) {
            count++;
        }
    }
    console.log(count)
    return count <= 1
}