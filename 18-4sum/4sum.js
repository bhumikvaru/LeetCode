/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
    const results = [];
    nums.sort((a, b) => a - b); // Sort the array

    if (nums.length < 4) return results; // Early exit if not enough elements

    for (let i = 0; i < nums.length - 3; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue; // Skip duplicates for the first number

        for (let j = i + 1; j < nums.length - 2; j++) {
            if (j > i + 1 && nums[j] === nums[j - 1]) continue; // Skip duplicates for the second number

            let k = j + 1, l = nums.length - 1;

            while (k < l) {
                const sum = nums[i] + nums[j] + nums[k] + nums[l];

                if (sum === target) {
                    results.push([nums[i], nums[j], nums[k], nums[l]]);
                    k++;
                    l--;

                    // Skip duplicates for the third and fourth numbers
                    while (k < l && nums[k] === nums[k - 1]) k++;
                    while (k < l && nums[l] === nums[l + 1]) l--;
                } else if (sum < target) {
                    k++; // Move the third pointer forward to increase the sum
                } else {
                    l--; // Move the fourth pointer backward to decrease the sum
                }
            }
        }
    }

    return results;
};
