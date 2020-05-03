const fn = require('./index');
const assert = require('assert');
const { describe, it } = require('mocha');

describe('lengthOfLongestSubstring', ()=>{
  it('common case', ()=>{
    assert.equal(fn('abad'), 'aba');
  });

  it('more than one result', ()=>{
    assert.equal(fn('babad'), 'bab');
  });

  it('single char case', ()=>{
    assert.equal(fn('aaaaa'), 'aaaaa');
  });

  it('latter on is longer', ()=>{
    assert.equal(fn('baabcdedcba'), 'abcdedcba');
  });

  it('string with duplicate char', ()=>{
    assert.equal(fn('pwwkew'), 'ww');
  });

  it('empty string', ()=>{
    assert.equal(fn(''), '');
  });

});