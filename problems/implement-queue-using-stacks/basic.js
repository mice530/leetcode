/**
 * Initialize your data structure here.
 */
var MyQueue = function() {
  this._pushStack = [];
  this._popStack = [];
};

/**
 * Push element x to the back of queue. 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
  this._pushStack.push(x);
};

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function() {
  this._tryMove();
  return this._popStack.pop();
};

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function() {
  this._tryMove();
  return this._popStack[this._popStack.length - 1];
};

/**
 * Move from push stack to pop stack
 * @return {number}
 */
MyQueue.prototype._tryMove = function() {
  let s1 = this._pushStack;
  let s2 = this._popStack;
  let tmp;
  if(s2.length > 0) return;
  while(tmp = s1.pop()) {
    s2.push(tmp);
  }
};

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
  return this._pushStack.length + this._popStack.length === 0;
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
module.exports = MyQueue;
