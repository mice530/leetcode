const fn = require('./index');
const assert = require('assert');
const { describe, it } = require('mocha');

describe('lengthOfLongestSubstring', ()=>{
  it('common case', ()=>{
    assert.equal(fn('abcdad'), 4);
  });

  it('single char case', ()=>{
    assert.equal(fn('aaaaa'), 1);
  });

  it('duplicate string', ()=>{
    assert.equal(fn('eabcdabca'), 5);
  });

  it('string with duplicate char', ()=>{
    assert.equal(fn('pwwkew'), 3);
  });

  it('empty string', ()=>{
    assert.equal(fn(''), 0);
  });

});