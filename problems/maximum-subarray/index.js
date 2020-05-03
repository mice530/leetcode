/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  if(!nums || nums.length === 0) return null;
  let lastRet = nums[0];
  let max = nums[0];
  for(let i = 1, len = nums.length; i<len; i++) {
    lastRet = Math.max(lastRet + nums[i], nums[i]);
    max = Math.max(max, lastRet);
  }
  return max;
};

module.exports = maxSubArray;
