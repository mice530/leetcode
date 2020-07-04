/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
  if(!head) return false;

  let pivot = head;
  while(pivot.next) {
    if(pivot.val === null) return true; // check flag
    pivot.val = null; // flag
    pivot = pivot.next; // next node
  }
  return false;
};

module.exports = hasCycle;
