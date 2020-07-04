/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
  let pivot = head;
  let count = 0;
  while(pivot) {
    ++count;
    pivot = pivot.next;
  }
  pivot = { next: head }; // 哨兵
  for(let i=0, len=Math.ceil((count + 1)/2); i<len; i++){
    pivot = pivot.next;
  }
  return pivot;
};

module.exports = middleNode;
