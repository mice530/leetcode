const fn = require('./index');
const assert = require('assert');
const { describe, it } = require('mocha');

function ListNode(val) {
  this.val = val;
  this.next = null;
}

function genList(arr) {
  let next = null;
  arr.reverse().forEach((val, idx) => {
    let node = new ListNode(val);
    node.next = next;
    next = node;
  });

  return next;
}

function assertLinkList(l1, l2) {
  while(l1 && l2 && l1.val === l2.val) {
    console.log('assert:', l1.val);
    l1 = l1.next;
    l2 = l2.next;
  }

  console.log('assert rest:', l1, l2);
  return !l1 && !l2;
}

describe('removeNthFromEnd', ()=>{
  it('removeNthFromEnd basic', ()=>{
    assert.equal(assertLinkList(
      fn(
        genList([1,2,3,4,5]), 2,
      ),
      genList([1,2,3,5]),
    ), true);
  });

  it('mergeTwoLists remove the last one', ()=>{
    assert.equal(assertLinkList(
      fn(
        genList([1, 2, 3, 4]), 1,
      ),
      genList([1, 2, 3]),
    ), true);
  });

  it('mergeTwoLists single node after deletion', ()=>{
    assert.equal(assertLinkList(
      fn(
        genList([1, 2]), 1,
      ),
      genList([1]),
    ), true);
  });

  it('mergeTwoLists remove the first node', ()=>{
    assert.equal(assertLinkList(
      fn(
        genList([1, 2]), 2,
      ),
      genList([2]),
    ), true);
  });

  it('mergeTwoLists single node', ()=>{
    assert.equal(assertLinkList(
      fn(
        genList([1]), 1,
      ),
      null,
    ), true);
  });

  it('mergeTwoLists empty list', ()=>{
    assert.equal(assertLinkList(
      fn(
        null, 0
      ),
      null,
    ), true);
  });
});