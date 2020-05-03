/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums, searchRange) {
  if(!nums || nums.length === 0) return null;

  let entry = explore(nums, 0, nums.length - 1);

  const [l, r] = searchRange || [0, nums.length - 1];
  const { mSum } = search(entry, l, r);
  return mSum;
};

let Node = function({ left, right, leftNode, rightNode, lSum, rSum, mSum, iSum }) {
  this.left = left;
  this.right = right;
  this.leftNode = leftNode;
  this.rightNode = rightNode;
  this.lSum = lSum;
  this.rSum = rSum;
  this.mSum = mSum;
  this.iSum = iSum;
}

function explore(nums, left, right) {
  let leftNode, rightNode, lSum, rSum, mSum, iSum;

  if(left === right) {
    leftNode = rightNode = null;
    lSum = rSum = mSum = iSum = nums[left];
  } else {
    const mid = Math.floor((left + right) / 2);
    leftNode = explore(nums, left, mid);
    rightNode = explore(nums, mid + 1, right);
    lSum = Math.max(leftNode.lSum, leftNode.iSum + rightNode.lSum);
    rSum = Math.max(rightNode.rSum, leftNode.rSum + rightNode.iSum);
    mSum = Math.max(leftNode.mSum, rightNode.mSum, leftNode.rSum + rightNode.lSum);
    iSum = leftNode.iSum + rightNode.iSum;
  }
  return new Node({ left, right, leftNode, rightNode, lSum, rSum, mSum, iSum });
}

function search(node, l, r) {
  let lSum, rSum, mSum, iSum;

  if(node.left === l && node.right === r) {
    lSum = node.lSum;
    rSum = node.rSum;
    mSum = node.mSum;
    iSum = node.iSum;
  } else {
    const lRet = search(node.leftNode, l, node.leftNode.right);
    const rRet = search(node.rightNode, node.rightNode.left, r);
    lSum = Math.max(lRet.lSum, lRet.iSum + rRet.lSum);
    rSum = Math.max(rRet.rSum, lRet.rSum + rRet.iSum);
    mSum = Math.max(lRet.mSum, rRet.mSum, lRet.rSum + rRet.lSum);
    iSum = lRet.iSum + rRet.iSum;
  }
  return { lSum, rSum, mSum, iSum };
}

module.exports = maxSubArray;
