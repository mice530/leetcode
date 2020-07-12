const fn = require('./index');
const assert = require('assert');
const { describe, it } = require('mocha');

describe('basic-calculator', ()=>{
  it('basic-calculator basic', ()=>{
    assert.equal(fn('1 + 1'), 2);
    assert.equal(fn('2-1 + 2'), 3);
  });

  it('basic-calculator with brackets', ()=>{
    assert.equal(fn('(1+(4+5+2)-3)+(6+8)'), 23);
  });

  it('basic-calculator with more minus', ()=>{
    assert.equal(fn('2-(5-6)'), 3);
  });
});