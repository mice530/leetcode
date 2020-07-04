const fn = require('./index');
const assert = require('assert');
const { describe, it } = require('mocha');

function ListNode(val) {
  this.val = val;
  this.next = null;
}

function genList(arr, pos) {
  let next = null;
  let circleEntry;
  arr.reverse().forEach((val, idx) => {
    let node = new ListNode(val);
    node.next = next;
    next = node;
    idx === pos && (circleEntry = node);
  });

  if(pos === -1) return next;

  const head = next;
  let pivot = head;
  while(pivot.next) {
    pivot = pivot.next;
  }
  pivot.next = circleEntry;

  return head;
}

describe('hasCycle', ()=>{
  it('hasCycle basic', ()=>{
    assert.equal(fn(genList([3,2,0,4], 1)), true);
    assert.equal(fn(genList([3,2,0,4], -1)), false);
  });

  it('hasCycle boundry', ()=>{
    assert.equal(fn(genList([3,2,0,4], 0)), true);
    assert.equal(fn(genList([3,2,0,4], 3)), true);
  });

  it('hasCycle single node', ()=>{
    assert.equal(fn(genList([3], 0)), true);
    assert.equal(fn(genList([3], -1)), false);
  });

  it('hasCycle empty list', ()=>{
    assert.equal(fn(null), false);  
  });
});