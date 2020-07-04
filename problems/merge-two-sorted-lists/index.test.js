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
    l1 = l1.next;
    l2 = l2.next;
  }

  return !l1 && !l2;
}

describe('mergeTwoLists', ()=>{
  it('mergeTwoLists basic', ()=>{
    assert.equal(assertLinkList(
      fn(
        genList([1,2,4]), genList([1, 3, 4])
      ),
      genList([1,1,2,3,4,4]),
    ), true);
  });

  it('mergeTwoLists single node', ()=>{
    assert.equal(assertLinkList(
      fn(
        genList([1]), genList([1]),
      ),
      genList([1,1]),
    ), true);
  });

  it('mergeTwoLists empty list', ()=>{
    assert.equal(assertLinkList(
      fn(
        null,
        null,
      ),
      null,
    ), true);

    assert.equal(assertLinkList(
      fn(
        null,
        genList([1]),
      ),
      genList([1]),
    ), true);
  });
});