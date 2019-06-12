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

});

describe('add', function () {
  // "it should add 1 and 4 together and return 5"
  it('adds 1 and 4 together', function(){

    calculator.numberClick(1)
    calculator.operatorClick('+')
    calculator.numberClick(4)
    calculator.operatorClick('=')

    assert.equal( 5, calculator.runningTotal)
  })

});


describe('subtract', function () {

  it('subtract 4 from 7', function(){
    calculator.numberClick(7)
    calculator.operatorClick('-')
    calculator.numberClick(4)
    calculator.operatorClick('=')
    assert.equal(3, calculator.runningTotal)
  })

});

describe('multiply', function () {

  // "it should multiply 3 x 5 and return 15"
  it('multiply 3 x 5', function(){

    calculator.numberClick(3)
    calculator.operatorClick('*')
    calculator.numberClick(5)
    calculator.operatorClick('=')
    assert.equal(15, calculator.runningTotal)
  })

});

describe('divide', function () {

  // "it should divide 21 by 7 and return 3"
  it('divide 21 by 7', function(){

   calculator.numberClick(21)
   calculator.operatorClick('/')
   calculator.numberClick(7)
   calculator.operatorClick('=')
    assert.equal(3, calculator.runningTotal)
  })

});

describe('numberClick', function () {

  // "it should display number concatonation"
  it('concatenate multiple number button clicks', function(){

    calculator.numberClick(5)
    calculator.numberClick(4)
    calculator.numberClick(3)
    assert.equal(543, calculator.runningTotal)
    calculator.clearClick()
  })
});



  describe('operatorClick', function () {
    // "it should concatonation multiple operations"
    it('should chain multiple operations', function(){

      calculator.numberClick(2)
      calculator.operatorClick('+')
      calculator.numberClick(4)
      calculator.operatorClick('-')
      calculator.numberClick(3)
      calculator.operatorClick('=')
      assert.equal(3, calculator.runningTotal)
    })

})

describe('clearClick', function () {
  // "it should concatonation multiple operations"
  it('should clear the running total without affecting the calculation', function(){

    calculator.numberClick(2)
    calculator.operatorClick('+')
    calculator.numberClick(4)
    calculator.clearClick()
    calculator.numberClick(3)
    calculator.operatorClick('=')
    assert.equal(5, calculator.runningTotal)
  })

});
