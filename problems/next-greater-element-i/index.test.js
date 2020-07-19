const fn = require('./index');
const assert = require('assert');
const { describe, it } = require('mocha');

describe('next-greater-element-i', ()=>{
  it('next-greater-element-i basic', ()=>{
    assert.deepEqual(fn([4,1,2], [1,3,4,2]), [-1,3,-1]);
    assert.deepEqual(fn([2,4], [1,2,3,4]), [3,-1]);
    assert.deepEqual(fn([1,3,5,2,4],[6,5,4,3,2,1,7]), [7,7,7,7,7]);
  });
});
