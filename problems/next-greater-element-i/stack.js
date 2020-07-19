/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
  // prepare map
  const stack = [nums2[0]];
  const map = new Map();

  for(let i=1,len=nums2.length; i<len; i++) {
    let last = stack.pop();
    let cur = nums2[i];
    while(cur > last) {
      // console.log(cur, last);
      map[last] = cur;
      last = stack.pop();
      if(!last) break;
    }
    stack.push(last, cur);
  }

  // console.log('map', map);
  return nums1.map(num => map[num] || -1);
};

module.exports = nextGreaterElement;
