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
  const len=sorted.length;

  if(sorted[0] > x) {
    sorted.unshift(x);
    // console.log('sorted updated:', sorted);
    return null;
  }
  if(len === 0 || sorted[len - 1] < x) {
    sorted.push(x);
    // console.log('sorted updated:', sorted);
    return null;
  }

  // console.log('sorted start:', x, this._sorted, 0, sorted.length - 1);
  const pos = this.binarySearch(x, this._sorted, 0, sorted.length - 1);
  sorted.splice(pos, 0, x);
  // console.log('sorted updated:', sorted);
  
  return null;
};

/** 
 * @param {number} x
 * @param {array} arr
 * @param {number} start
 * @param {number} end
 * @return {number}
 */
MinStack.prototype.binarySearch = function(x, arr, start, end) {
  // console.log('binary search:', x, arr, start, end);
  if(start === end) return start;
  let pos = Math.floor((start + end) / 2);
  if(x === arr[pos]) return pos;
  return x > arr[pos] ?
    this.binarySearch(x, arr, pos + 1, end) :
    this.binarySearch(x, arr, start, pos);
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
