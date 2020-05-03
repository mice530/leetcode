/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  const hash = {};
  for(let i = 0, len = nums.length, curVal; i<len; i++) {
    curVal = nums[i];
    if(hash[target - curVal] !== undefined) {
      return [ hash[target - curVal], i ];
    }
    hash[curVal] = i;
  }
  return null;
};

module.exports = twoSum;
