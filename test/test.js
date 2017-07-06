const chai = require('chai');
const expect = chai.expect;



describe ('Person class', function(){
  it('Should be a function', function(){
    expect(Person).to.be.a('function');
  });
  describe ('Person class name property', function(){
    it('Should have a name property that is a string', function(){
      expect(bubsy.name).to.be.a('string');
    });
  });
  describe ('Person class age property', function(){
    it ('Should have an age property that is a number', function(){
      expect(bubsy.age).to.be.a('number');
    });
  });
  describe ('sayHello method', function(){
    it ('Should have a sayHello method that returns the string "Hello!"', function(){
      expect(bubsy.sayHello()).to.equal('Hello!');
    });
  });
  describe ('sayName method', function(){
    it ('Should have a sayName method that returns the string "My name is Bubsy"', function(){
      expect(bubsy.sayName()).to.equal('My name is ' + bubsy.name);
    });
  });
  describe ('sayAge method', function(){
    it ('Should have a sayAge method that returns the string "I am 97 years old!"', function(){
      expect(bubsy.sayAge()).to.equal('I am ' + bubsy.age + ' years old!');
    });
  });
});
