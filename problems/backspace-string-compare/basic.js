/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
var backspaceCompare = function(S, T) {
  let s1 = [];
  let s2 = [];
  for(let i=0, len=S.length; i<len; i++) {
    S[i] === '#' ? s1.pop() : s1.push(S[i]);
  }
  for(let i=0, len=T.length; i<len; i++) {
    T[i] === '#' ? s2.pop() : s2.push(T[i]);
  }
  if(s1.length !== s2.length) return false; // fast exit
  let c1,c2;
  while(true) {
    c1=s1.pop();
    c2=s2.pop();
    if(c1 !== c2) return false;
    if(!c1) return true; // 上句决定了c1 === c2，因此只需要判定c1是否为空即可
  }
};

module.exports = backspaceCompare;
