// create test suite for stack data structure here
const { createStack } = require('../stack');

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

});
