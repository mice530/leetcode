/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  if(n === 0) return head;
  
  const sentinel = { next: head };
  let i = -1;
  const len = n + 1;
  const nthArr = new Array(len);
  let pivot = sentinel;
  while(pivot) {
    nthArr[++i % len] = pivot;
    pivot = pivot.next;
  }

  const prev = (i - n + len) % len;
  const next = (prev + 2) % len;
  nthArr[prev].next = n === 1 ? null : nthArr[next];
  return sentinel.next;
};

module.exports = removeNthFromEnd;
