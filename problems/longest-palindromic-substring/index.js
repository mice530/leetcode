/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  let ret = s[0];
  let substr = s[0];
  let subLen = 1;
  let idx, potentialHW;
  for(let i = 1, len = s.length; i<len; i++) {
    if(s[i] === s[i - subLen - 1]) {
      substr = s.slice(i - subLen - 1, i + 1);
    } else {
      idx = -1;
      substr += s[i];
      while((idx = substr.indexOf(s[i], idx + 1)) > -1) {
        potentialHW = substr.slice(idx);
        if(potentialHW.split('').reverse().join('') === potentialHW) {
          substr = potentialHW;
          break;
        }
      }
    }

    subLen = substr.length;
    subLen > ret.length && (ret = substr);
  }

  return ret || '';
};

module.exports = longestPalindrome;
