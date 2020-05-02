/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let left = 0;
  let right = -1;
  let len = s.length;
  let substr = '';
  let max = 0;

  while(left + max < len) {
    let dup = -1;
    while(right + 1 < len && (dup = substr.indexOf(s[right + 1])) && dup === -1) {
      right++;
      substr += s[right];
    }

    max = Math.max(max, right - left + 1);

    substr = substr.substr(dup + 1);
    left += dup + 1;
  }
  
  return max;
};

module.exports = lengthOfLongestSubstring;