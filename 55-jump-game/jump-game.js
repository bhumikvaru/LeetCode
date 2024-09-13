/*
 * @lc app=leetcode id=55 lang=javascript
 *
 * [55] Jump Game
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */

var canJump = function (nums) {
  let finalDestination = nums.length - 1;
  for (let i = nums.length - 2; i >= 0; i--) {
    if (nums[i] + i >= finalDestination) {
      finalDestination = i;
    }
  }
  if (finalDestination === 0) return true;
  return false;
};
// @lc code=end
