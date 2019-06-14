var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  })
  
  
  // Unit tests
  it('it can add two numbers', function(){
    calculator.previousTotal = 1;
    calculator.add(4);
    assert.equal(5, calculator.runningTotal)
  })
  
  it('it can subtract two numbers', function(){
    calculator.previousTotal = 7;
    calculator.subtract(4);
    assert.equal(3, calculator.runningTotal)
  })
  
  it('it can multiply two numbers', function(){
    calculator.previousTotal = 3;
    calculator.multiply(5);
    assert.equal(15, calculator.runningTotal)
  })
  
  it('it can divide two numbers', function(){
    calculator.previousTotal = 21;
    calculator.divide(7);
    assert.equal(3, calculator.runningTotal)
  })
  
  
  // Integration tests
  it('it can concatenate multiple number clicks', function(){
    calculator.numberClick(1);
    calculator.numberClick(2);
    calculator.numberClick(3);
    calculator.numberClick(4);
    assert.equal(1234, calculator.runningTotal)
  })
  
  it('it can chain mutiple operations together', function(){
    calculator.numberClick(5);
    calculator.operatorClick('+');
    calculator.numberClick(2);
    assert.equal('+', calculator.previousOperator)
    calculator.operatorClick('-');
    assert.equal(7, calculator.runningTotal)
    assert.equal('-', calculator.previousOperator)
    calculator.numberClick(3);
    calculator.operatorClick('*')
    assert.equal(4, calculator.runningTotal)
    assert.equal('*', calculator.previousOperator)
    calculator.numberClick(2);
    calculator.operatorClick('/');
    assert.equal(8, calculator.runningTotal)
    assert.equal('/', calculator.previousOperator)
    calculator.numberClick(4);
    calculator.operatorClick('=');
    assert.equal(null, calculator.previousOperator)
    assert.equal(2, calculator.runningTotal)
  })
  
  it('it can clear the running total without affecting the calculation', function(){
    calculator.runningTotal = 5;
    calculator.operatorClick('+');
    calculator.numberClick(3);
    calculator.operatorClick('-');
    calculator.numberClick(2);
    calculator.clearClick();
    assert.equal(8, calculator.previousTotal)
    assert.equal(0, calculator.runningTotal)
  })

});
