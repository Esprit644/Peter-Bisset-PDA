var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;
// 
describe('calculator functionality', function() {
  beforeEach(function() {
    browser.ignoreSynchronization = true;
    browser.get('http://localhost:3000');
  });

  // write integration tests here in the form of "it should do something..."
  it('should have working number buttons', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number2')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('2')
  })


  // write integration tests here in the form of "it should do something..."
  it('it should display the result of the operation', function(){

    running_total = element(by.css('#running_total'))
    element(by.css('#number6')).click();
    element(by.css('#operator_add')).click();
    element(by.css('#number3')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('9')
  })



  // write integration tests here in the form of "it should do something..."
  it('it should chain multiple operations together', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number9')).click();
    element(by.css('#operator_add')).click();
    element(by.css('#number3')).click();
    element(by.css('#operator_subtract')).click();
    element(by.css('#number6')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('6')
  })




  // write integration tests here in the form of "it should do something..."
  it('it should show output for a range of numbers (for example, positive, negative, decimals and very large numbers)', function(){
    running_total = element(by.css('#running_total'))
     element(by.css('#number2')).click();
     element(by.css('#operator_subtract')).click();
    element(by.css('#number3')).click();
    element(by.css('#operator_equals')).click();
     expect(running_total.getAttribute('value')).to.eventually.equal('-1')
  })





  // write integration tests here in the form of "it should do something..."
  it('it should display Not a number when divided by zero', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number2')).click();
    element(by.css('#operator_divide')).click();
    element(by.css('#number0')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('Not a number')
  })

});