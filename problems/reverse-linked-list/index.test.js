const fn = require('./index');
const assert = require('assert');
const { describe, it } = require('mocha');

function ListNode(val) {
  this.val = val;
  this.next = null;
}

function genList(arr) {
  let next;
  arr.reverse().forEach(val => {
    let node = new ListNode(val);
    node.next = next;
    next = node;
  });

  return next;
}

describe('reverseList', ()=>{
  it('reverseList with empty list', ()=>{
    assert.equal(fn(null), null);
  });

  it('reverseList with single node', ()=>{
    const head = fn(genList([1]));
    assert.equal(head.val, 1);
    assert.equal(head.next, null);
  });

  it('reverseList with more than 1 node', ()=>{
    const arr = [1, 2, 3, 4, 5];
    const head = fn(genList(arr));
    const ret = [];
    let cur = head;
    while(cur) {
      ret.push(cur.val);
      cur = cur.next;
    }
    assert.deepEqual(ret, arr);
  });
});