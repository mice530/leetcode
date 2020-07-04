const MyQueue = require('./index');
const assert = require('assert');
const { describe, it } = require('mocha');

describe('min-stack', ()=>{
  it('queueByStack basic', ()=>{
    const queue = new MyQueue();
    queue.push(1);
    queue.push(2);
    assert.equal(queue.peek(), 1);
    assert.equal(queue.pop(), 1);
    assert.equal(queue.empty(), false);
  });
});