/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
  return nums1.map(origin => {
    for(let i = nums2.indexOf(origin) + 1, len=nums2.length; i<len; i++) {
      if(nums2[i] > origin) {
        return nums2[i];
      }
    }
    return -1;
  });
};

module.exports = nextGreaterElement;
