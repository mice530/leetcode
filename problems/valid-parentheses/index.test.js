const fn = require('./index');
const assert = require('assert');
const { describe, it } = require('mocha');

describe('valid-parentheses', ()=>{
  it('valid-parentheses basic', ()=>{
    assert.equal(fn("()"), true);
    assert.equal(fn("(]"), false);
  });

  it('valid-parentheses full pair', ()=>{
    assert.equal(fn("()[]{}"), true);
  });

  it('valid-parentheses cross pair', ()=>{
    assert.equal(fn("([)]"), false);
  });
  
  it('valid-parentheses empty string', ()=>{
    assert.equal(fn(""), true);
  });

  it('valid-parentheses single char', ()=>{
    assert.equal(fn("["), false);
    assert.equal(fn("{"), false);
    assert.equal(fn("["), false);
  });

  it('valid-parentheses odd chars', ()=>{
    assert.equal(fn("["), false);
    assert.equal(fn("{"), false);
    assert.equal(fn("["), false);
  });
});