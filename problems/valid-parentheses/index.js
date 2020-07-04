/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  const stack = [];
  const left = '({[';
  const right = ')}]';
  for(let i=0, len=s.length, c; i<len; i++) {
    c = s[i];
    if(left.indexOf(c) > -1 && stack.push(c)) continue;
    if(left.indexOf(stack.pop()) !== right.indexOf(c)) return false;
  }
  return stack.length === 0;
};

module.exports = isValid;
