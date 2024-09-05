/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
let c = 1;
for (let i = 1; i < nums.length; i++) {
  if (nums[i] === nums[i - 1]) {
  } else {
    nums[c] = nums[i];
    c++;
  }
};
  return c;

}