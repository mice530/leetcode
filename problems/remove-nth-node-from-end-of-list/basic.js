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
  if(!head) return null;
  if(!head.next && n !== 0) return null;

  let i = -1;
  const len = n + 1;
  const nthArr = new Array(len);
  let pivot = head;
  while(pivot) {
    nthArr[++i % len] = pivot;
    pivot = pivot.next;
  }

  const prev = (i - n + len) % len;
  const next = (prev + 2) % len;
  // when the first node removed
  if(!nthArr[prev]) return nthArr[next] || null;
  // remove the node
  nthArr[prev].next = 
    prev === next ? null :
    nthArr[next] || null;
  return head;
};

module.exports = removeNthFromEnd;
