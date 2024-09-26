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
            // console.log(maximum)
            console.log(count)
            if (maximum <count) {
                maximum = count;
            }
            //     console.log(maximum)
            // }
            count = 0;
        }
    }
    // console.log(count)
    if(count>maximum) maximum = count;
        console.log(maximum)

    return maximum;
};