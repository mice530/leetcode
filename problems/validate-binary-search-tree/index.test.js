const fn = require('./index');
const assert = require('assert');
const { describe, it } = require('mocha');

describe('isValidBST', ()=>{
  it('common case', ()=>{
    assert.equal(fn([2,1,3]), true);
  });

  it('false case', ()=>{
    assert.equal(fn([5,1,4,null,null,3,6]), false);
  });
});
