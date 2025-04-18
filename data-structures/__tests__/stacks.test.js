// create test suite for stack data structure here
const { createStack, stackPrototype } = require('../stack');

describe('Stack', () => {
  test('should create an empty stack', () => {
    const stack = createStack();
    expect(stack.quantity).toEqual(0);
  });

  test('should initialize with an empty storage object', () => {
    const stack = createStack();
    expect(stack.storage).toEqual({});
  });
  test('should have a max size of 5', () => {
    const stack = createStack();
    expect(stack.maxSize).toEqual(5);
  });
  test('maxsize should take an arugment of 10', () => {
    const stack = createStack(10);
    expect(stack.maxSize).toEqual(10);
  });
  test('should push a property to storage object and increase the quantity', () => {
    const stack = createStack();
    stack.push("apple");
    expect(stack.quantity).toEqual(1);
    expect(stack.storage).toEqual({ 0: 'apple' }); // Fix key to 0
  });
   test('should push two properties to storage object and increase the quantity', () => {
    const stack = createStack();
    stack.push("apple");
    stack.push("banana");
    expect(stack.quantity).toEqual(2);
    expect(stack.storage).toEqual({ 0: 'apple', 1: 'banana'}); // Fix key to 0
  });

});
