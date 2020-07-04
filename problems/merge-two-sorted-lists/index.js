/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
  const head = { next: null };
  let pivot = head;
  let l1 = list1;
  let l2 = list2;

  while(l1 && l2) {
    if(l1.val - l2.val > 0) {
      pivot = pivot.next = l2;
      l2 = l2.next;
      
      continue;
    }
    pivot = pivot.next = l1;
    l1 = l1.next;
  }

  let rest = l1 ? l1 : l2;
  // 直接复用尾部链表
  pivot.next = rest;

  return head.next;
};

module.exports = mergeTwoLists;
