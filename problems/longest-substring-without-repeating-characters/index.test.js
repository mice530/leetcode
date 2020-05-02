const fn = require('./index');
const assert = require('assert');
const { describe, it } = require('mocha');

describe('lengthOfLongestSubstring', ()=>{
  it('common case', ()=>{
    assert(fn('abcdad'), 4);
  });

  it('single char case', ()=>{
    assert(fn('aaaaa'), 1);
  });

  it('duplicate string', ()=>{
    assert(fn('eabcdabca'), 3);
  });

  it('string with duplicate char', ()=>{
    assert(fn('pwwkew'), 3);
  });

  it('empty string', ()=>{
    assert(fn(''), 0);
  });

});