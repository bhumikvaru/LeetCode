/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  const array = nums.sort((a, b) => a - b);  // Sort the array
  let results = [];

  for (let i = 0; i < array.length; i++) {
    // Skip duplicates for 'i'
    if (i > 0 && array[i] === array[i - 1]) continue;
    
    // Early exit if array[i] > 0, because no valid triplet can be found beyond this point
    if (array[i] > 0) break;

    let j = i + 1;
    let k = array.length - 1;

    while (j < k) {
      const sum = array[i] + array[j] + array[k];

      if (sum === 0) {
        results.push([array[i], array[j], array[k]]);
        
        // Skip duplicates for 'j' and 'k' after finding a valid triplet
        while (j < k && array[j] === array[j + 1]) j++;  // Skip duplicates for 'j'
        while (j < k && array[k] === array[k - 1]) k--;  // Skip duplicates for 'k'
        
        j++;  // Move 'j' forward
        k--;  // Move 'k' backward
      } else if (sum < 0) {
        j++;  // Increase 'j' to get a larger sum
      } else {
        k--;  // Decrease 'k' to get a smaller sum
      }
    }
  }

  return results;
};
