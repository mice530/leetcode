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

describe('middleNode', ()=>{
  it('middleNode odd', ()=>{
    assert.equal(assertLinkList(
      fn(
        genList([1,2,3,4,5]),
      ),
      genList([3,4,5]),
    ), true);
  });

  it('middleNode even', ()=>{
    assert.equal(assertLinkList(
      fn(
        genList([1,2,3,4,5,6]),
      ),
      genList([4,5,6]),
    ), true);
  });
});