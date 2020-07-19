/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, _k) {
  let end = nums.length - 1;
  let start = 0;
  const k = _k - 1;

  while(true) {
    const pivot = Math.floor(( start + end) / 2);
    const val = nums[pivot];
    // console.log('loop start:', start, end, pivot, nums);

    swap(pivot, end);
    let i=start;
    for(let j=start; j<end; j++) {
      if(nums[j] >= val) {
        swap(i++, j);
      }
    }
    swap(i, end);

    if(i === k) return val;
    i < k ? start = i + 1 : end = i - 1;
  }

  function swap(i, j) {
    let tmp = nums[i];
    nums[i] = nums[j];
    nums[j] = tmp;
  }
};

module.exports = findKthLargest;
