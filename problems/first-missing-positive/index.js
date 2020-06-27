/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
  let i = 0, len = nums.length, max = len + 1;

  // 规整负数
  for(i = 0; i < len; i++) {
    if(nums[i] <= 0) nums[i] = max;
  }

  // 标记N以内出现过的数字
  for(i = 0; i < len; i++) {
    // 使用绝对值比较，否则可能出现已标记位为负数，导致取值超出的问题
    let abs = Math.abs(nums[i]);
    // 注意此处数字是1~N，而数组角标是0~N-1
    // 因此比较时max=N+1，角标计算为abs - 1
    if(abs < max) {
      nums[abs - 1] = -1 * Math.abs(nums[abs - 1]);
    }
  }

  // 寻找最小整数
  for(i = 0; i < len; i++) {
    if(nums[i] > 0) return i + 1;
  }

  return max;
};

module.exports = firstMissingPositive;
