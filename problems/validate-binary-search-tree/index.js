/**
 * @param {Number[]} array
 * @return {boolean}
 */
var isValidBST = function(arr) {
  const stack = [{
    idx: 0,
    upBoundry: Number.POSITIVE_INFINITY,
    downBoundry: Number.NEGATIVE_INFINITY,
  }];

  while(item = stack.pop()) {
    const { idx, upBoundry, downBoundry } = item;
    const val = arr[idx];

    leftChild = arr[2 * idx + 1];
    rightChild = arr[2 * idx + 2];
    
    if(typeof leftChild === 'number') {
      if(leftChild > val || leftChild < downBoundry) {
        return false;
      }
      stack.push({
        idx: 2 * idx + 1,
        upBoundry: val,
        downBoundry,
      });
    }

    if(typeof rightChild === 'number') {
      if(rightChild < val || rightChild > upBoundry) {
        return false;
      }
      stack.push({
        idx: 2 * idx + 2,
        upBoundry: upBoundry,
        downBoundry: val,
      });
    }
  }

  return true;
};

module.exports = isValidBST;
