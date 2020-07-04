/**
 * initialize your data structure here.
 */
var MinStack = function() {
  this._stack = [];
  this._sorted = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
  this._stack.push(x);

  const sorted = this._sorted;
  let i = 0;
  const len=sorted.length;
  for(; i<len; i++) {
    if(sorted[i] > x) {
      sorted.splice(i, 0, x);
      break;
    }
  }
  if(i === len) sorted.push(x);
  
  return null;
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  const x = this._stack.pop();

  const sorted = this._sorted;
  for(let i=0, len=sorted.length; i<len; i++) {
    if(sorted[i] === x) {
      sorted.splice(i, 1);
      break;
    }
  }
  return null;
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
  return this._stack.length > 0 ? this._stack[this._stack.length - 1] : null;
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
  return typeof this._sorted[0] === 'number' ? this._sorted[0] : null;
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
module.exports = MinStack;
