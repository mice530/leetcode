/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
var backspaceCompare = function(S, T) {
  let cur1 = S.length - 1;
  let cur2 = T.length - 1;
  while(cur1 > -1 || cur2 > -1) {
    const ret = [[cur1, S], [cur2, T]].map(([oCur, str]) => {
      let count = 0;
      let cur = oCur;
      do {
        // console.log('loop:', str, cur, count, str[cur]);
        if(str[cur] === '#') {
          count++;
          cur--;
          continue;
        }
  
        if(count > 0) {
          count--;
          cur--;
        }
      } while(count > 0 || str[cur] === '#');

      // console.log('loop end:', str, cur, str[cur]);
      return cur;
    });
    cur1 = ret[0];
    cur2 = ret[1];
    // console.log(cur1, cur2, S[cur1], T[cur2]);
    if(S[cur1] !== T[cur2]) return false;
    cur1--;
    cur2--;
  }

  // console.log(cur1, cur2);
  return cur1 < 0 && cur2 < 0;
};

module.exports = backspaceCompare;
