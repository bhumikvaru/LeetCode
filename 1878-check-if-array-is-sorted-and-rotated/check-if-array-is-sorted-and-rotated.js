/**
 * @param {number[]} nums
 * @return {boolean}
 */
var check = function (nums) {
    let count = 0;
    if (nums.length === 1)
        return true;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > (nums[(i + 1) % nums.length])) {
            count++;
        }
    }
    console.log(count)
    return count <= 1
}