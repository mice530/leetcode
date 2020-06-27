/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let left = 0;
  let right = -1;
  let len = s.length;
  let map = new Set();
  let max = 0;

  for(let i=0; i + max < len; i++) {
    left = i;
    if(i > 0) {
      map.delete(s[left - 1]);
    }

    while(right + 1 < len && !map.has(s[right + 1])) {
      right++;
      map.add(s[right]);
    }

    max = Math.max(max, right - left + 1);
  }
  
  return max;
};