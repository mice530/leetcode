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

  while(i + max < len) {
    while(right + 1 < len && !map.has(s[right + 1])) {
      right++;
      substr += s[right];
    }

    max = Math.max(max, right - left + 1);

    if(right+1 < len) {
      let move = substr.indexOf(s[right+1]);
      substr.substr(move);
      left += move;
    }
    
  }
  
  return max;
};