/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
  buildHeap();
  // console.log('heap:', nums);

  let count = nums.length;
  let i = 0;
  for(let i = 0; i<k; i++) {
    swap(0, --count);
    heapify(count, 0);
    // console.log('heapify:', i, count, nums);
  }

  // console.log('selected:', count, nums[count], nums);
  return nums[count];

  function heapify(count, entry) {
    let i = entry;
    while(true) {
      let maxPos = i;
      if((i * 2 + 1 < count) && nums[maxPos] < nums[i * 2 + 1]) maxPos = i * 2 + 1;
      if((i * 2 + 2 < count) && nums[maxPos] < nums[i * 2 + 2]) maxPos = i * 2 + 2;
      if(maxPos === i) break;

      swap(i, maxPos);
      i = maxPos;
    }
  }

  function buildHeap() {
    const count = nums.length;
    for(let i = Math.floor(count / 2) - 1; i>=0; i--) {
      heapify(count, i);
    }
  }

  function swap(i, j) {
    let tmp = nums[i];
    nums[i] = nums[j];
    nums[j] = tmp;
  }
};

module.exports = findKthLargest;
