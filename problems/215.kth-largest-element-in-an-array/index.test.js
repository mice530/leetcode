const fn = require('./index');
const assert = require('assert');
const { describe, it } = require('mocha');

describe('findKthLargest', ()=>{
  it('findKthLargest basic', ()=>{
    assert.equal(fn([3,2,1,5,6,4], 2), 5);
  });

  it('findKthLargest basic', ()=>{
    assert.equal(fn([3,2,3,1,2,4,5,5,6], 4), 4);
  });
});