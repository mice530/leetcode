/**
 * initialize your data structure here.
 */
var MinStack = function() {
  this._stack = [];
  this._min = [Infinity];
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
  this._stack.push(x);
  this._min.push(
    Math.min(x,  this.getMin())
  );
  return null;
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  this._stack.pop();
  this._min.pop();
  return null;
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
  return this._stack[this._stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
  return this._min[this._min.length - 1];
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
