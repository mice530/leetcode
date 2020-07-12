/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
  const stack = ['('];
  s += ')';
  let num = 0;
  let flag = 1;

  for(let i=0,len=s.length; i<len; i++) {
    let char = s[i];

    // console.log('loop: ', char, stack);
    if(char === ' ') continue;

    if(char === '(') {
      stack.push(char);
      continue;
    }

    if(char >= '0' && char <='9') {
      num = num * 10 + parseInt(char, 10);
      continue;
    }

    stack.push(num);
    num = 0;

    if(char === '-') {
      stack.push(char);
      continue;
    }

    if(char === ')') {
      let ret = 0;
      let item, lastItem;
      // console.log('cal: ', stack);
      while(stack.length > 0) {
        item = stack.pop();

        if(item === '(') {
          stack.push(ret);
          break;
        }

        if(item === '-') {
          ret -= 2*lastItem;
          continue;
        }
        // console.log('sum: ', ret, item);
        ret += item;
        lastItem = item;
      }
      continue;
    }
  }

  return stack[0];
};

module.exports = calculate;
