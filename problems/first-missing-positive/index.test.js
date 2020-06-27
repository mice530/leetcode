const fn = require('./index');
const assert = require('assert');
const { describe, it } = require('mocha');

describe('firstMissingPositive', ()=>{
  it('firstMissingPositive is the biggest', ()=>{
    assert.equal(fn([1,2,0]), 3);
  });

  it('firstMissingPositive is the smallest', ()=>{
    assert.equal(fn([7,8,9,11,12]), 1);
  });

  it('firstMissingPositive is between min & max', ()=>{
    assert.equal(fn([3,4,-1,1]), 2);
    assert.equal(fn([-1,4,2,1,9,10]), 3);
  });

  it('firstMissingPositive with dup num', ()=>{
    assert.equal(fn([3,4,4,1]), 2);
    assert.equal(fn([-1,4,2,1,2,4,9,10]), 3);
  });

  it('firstMissingPositive with 1 num', ()=>{
    assert.equal(fn([1]), 2);
  });
});