/**
 * initialize your data structure here.
 */
var MinStack = function() {
  this._stack = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
  this._stack.push(x);
  return null;
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  this._stack.pop();
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
  return this._stack.reduce((acc, item) => Math.min(acc, item), this._stack[0]) || null;
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
