const fn = require('./index');
const assert = require('assert');
const { describe, it } = require('mocha');

describe('twoSum', ()=>{
  it('common case', ()=>{
    assert.deepEqual(fn([2, 7, 11, 15], 9), [0, 1]);
    assert.deepEqual(fn([2, 7, 11, 15], 17), [0, 3]);
  });

  it('no answer', ()=>{
    assert.equal(fn([1, 2], 4), null);
  });
});