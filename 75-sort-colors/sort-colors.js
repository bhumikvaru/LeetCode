/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
   for (let i = 0; i < nums.length - 1; i++) {
        // Inner loop for each pair comparison
        for (let j = 0; j < nums.length- i - 1; j++) {
            // Swap if the element is greater than the next
            if (nums[j] > nums[j + 1]) {
                let temp = nums[j];
                nums[j] = nums[j + 1];
                nums[j + 1] = temp;
            }
        }
   }
        };