const fn = require('./index');
const assert = require('assert');
const { describe, it } = require('mocha');

describe('maxSubArray', ()=>{
  it('common case', ()=>{
    assert.equal(fn([-2,1,-3,4,-1,2,1,-5,4]), 6);
    assert.equal(fn([-2,3,-1,3,-1]), 5);
    assert.equal(fn([-2,1,-1,6,-1]), 6);
  });

  it('all neg nums', ()=>{
    assert.equal(fn([-2,-1,-3,-5]), -1);
  });

  it('single num', ()=>{
    assert.equal(fn([-2]), -2);
  });

  it('empty array', ()=>{
    assert.equal(fn([]), null);
  });

});
