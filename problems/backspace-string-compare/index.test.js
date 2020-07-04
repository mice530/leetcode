const fn = require('./index');
const assert = require('assert');
const { describe, it } = require('mocha');

describe('backspace-string-compare', ()=>{
  it('backspace-string-compare basic', ()=>{
    assert.equal(fn('ab#c', 'ad#c'), true);
  });

  it('backspace-string-compare more backspaces', ()=>{
    assert.equal(fn('ab##', 'a#d#'), true);
  });

  it('backspace-string-compare starts with backspace', ()=>{
    assert.equal(fn('#ba#', 'a#b'), true);
  });

  it('backspace-string-compare odd string', ()=>{
    assert.equal(fn('#ba#a', 'a#b'), false);
  });

  it('backspace-string-compare small difference', ()=>{
    assert.equal(fn('#ba#a', 'a#bc'), false);
  });

  it('backspace-string-compare starts with meaningless input', ()=>{
    assert.equal(fn('nzp#o#g', 'b#nzp#o#g'), true);
  });
});