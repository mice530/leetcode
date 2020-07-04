const MinStack = require('./index');
const assert = require('assert');
const { describe, it } = require('mocha');

describe('min-stack', ()=>{
  it('vmin-stack basic', ()=>{
    const stack = new MinStack();
    assert.equal(stack.push(-2), null);
    assert.equal(stack.push(0), null);
    assert.equal(stack.push(-3), null);
    assert.equal(stack.getMin(), -3);
    assert.equal(stack.pop(), null);
    assert.equal(stack.top(), 0);
    assert.equal(stack.getMin(), -2);
  });

  it('vmin-stack pop to empty', ()=>{
    const stack = new MinStack();
    assert.equal(stack.push(-2), null);
    assert.equal(stack.getMin(), -2);
    assert.equal(stack.pop(), null);
  });

  it('vmin-stack ', ()=>{
    const stack = new MinStack();
    assert.equal(stack.push(2), null);
    assert.equal(stack.push(0), null);
    assert.equal(stack.push(3), null);
    assert.equal(stack.push(0), null);
    assert.equal(stack.getMin(), 0);
    assert.equal(stack.pop(), null);
    assert.equal(stack.getMin(), 0);
    assert.equal(stack.pop(), null);
    assert.equal(stack.getMin(), 0);
    assert.equal(stack.pop(), null);
    assert.equal(stack.getMin(), 2);
  });

  it('vmin-stack ', ()=>{
    const stack = new MinStack();
    assert.equal(stack.push(-10), null);
    assert.equal(stack.push(14), null);
    assert.equal(stack.getMin(), -10);
    assert.equal(stack.getMin(), -10);
    assert.equal(stack.push(-20), null);
    assert.equal(stack.getMin(), -20);
    assert.equal(stack.getMin(), -20);
    assert.equal(stack.top(), -20);
    assert.equal(stack.getMin(), -20);
    assert.equal(stack.pop(), null);
    assert.equal(stack.push(10), null);
    assert.equal(stack.push(-7), null);
    assert.equal(stack.getMin(), -10);
    assert.equal(stack.push(-7), null);
    assert.equal(stack.pop(), null);
    assert.equal(stack.top(), -7);
    assert.equal(stack.getMin(), -10);
    assert.equal(stack.pop(), null);
  });
});