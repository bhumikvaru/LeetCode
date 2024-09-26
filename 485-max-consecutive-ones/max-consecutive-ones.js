/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
    let maximum = 0;
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 1) {
            count++;
        } else {
            console.log(count)
            if (maximum <count) {
                maximum = count;
            }
            count = 0;
        }
    }
    if(count>maximum) maximum = count;

    return maximum;
};