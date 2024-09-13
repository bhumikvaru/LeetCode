/*
 * @lc app=leetcode id=45 lang=javascript
 *
 * [45] Jump Game II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
  if (nums.length === 1) return 0;
  let farthest = 0;
  let currentEnd = 0;
  let jump = 0;
    for (let i = 0; i < nums.length; i++) {
        //farthest covers the full range from current Index.
        //go to the next step and best from there
    farthest = Math.max(farthest, i + nums[i]);

    if (i === currentEnd) {
      jump++;
      currentEnd = farthest;
      if (farthest >= nums.length - 1) return jump;
    }
  }
};
// @lc code=end
