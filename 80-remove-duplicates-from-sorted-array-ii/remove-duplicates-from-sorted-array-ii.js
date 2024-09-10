/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
 let c = 0;
let count = 0;
let val = nums[0];

for (let i = 0; i < nums.length; i++) {
  if (nums[i] === val && count < 2) {
    nums[c] = nums[i];
    c++;
    count++;
  } else if (nums[i] === val && count >= 2) {
    //   console.log("nums", nums);
    count++;
  } else {
    nums[c] = nums[i];

    console.log("Swapping here");
    val = nums[i];
    count = 1;
    c++;
  }
}
return c;

};