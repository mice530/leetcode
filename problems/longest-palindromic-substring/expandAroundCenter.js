/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  let ret = '';
  let evenLen, oddLen, maxLen;
  for(let i = 0, len = s.length; i<len; i++) {
    evenLen = expandAround(s, i, i + 1);
    oddLen = expandAround(s, i, i);
    maxLen = Math.max(evenLen, oddLen);
    if(maxLen > ret.length) {
      ret = s.slice(i - Math.ceil(maxLen / 2) + 1, i + Math.floor(maxLen / 2) + 1);
    }
  }

  return ret;
};

function expandAround(s, l, r) {
  let left = l;
  let right = r;
  let len = s.length;
  while(left >= 0 && right < len && s[left] === s[right]) {
    left--;
    right++;
  }

  return right - left - 1;
}

module.exports = longestPalindrome;
