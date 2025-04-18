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
  test('to remove the last property from storage object and decrease the quantity', () => {
    const stack = createStack();
    stack.push("apple");
    stack.push("banana");
    stack.pop();
    expect(stack.quantity).toEqual(1);
    expect(stack.storage).toEqual({ 0: 'apple' }); // Fix key to 0
  }
  );
  test('should throw an error when popping from an empty stack', () => {
    const stack = createStack();
    expect(() => stack.pop()).toThrow('Stack underflow');
  });
  test('should throw an error when pushing to a full stack', () => {
    const stack = createStack(2);
    stack.push("apple");
    stack.push("banana");
    expect(() => stack.push("cherry")).toThrow('Stack overflow');
  });
  test('should return the size of the stack', () => {
    const stack = createStack();
    stack.push("apple");
    stack.push("banana");
    expect(stack.size()).toEqual(2);
  });
  test('should return true if the stack is empty', () => {
    const stack = createStack();
    expect(stack.isEmpty()).toBe(true);
  });
  test('should return false if the stack is not empty', () => {
    const stack = createStack();
    stack.push("apple");
    expect(stack.isEmpty()).toBe(false);
  });
  test('should return the top element of the stack without removing it', () => {
    const stack = createStack();
    stack.push("apple");
    stack.push("banana");
    expect(stack.peek()).toEqual("banana");
  });
  test('should throw an error when peeking an empty stack', () => {
    const stack = createStack();
    expect(() => stack.peek()).toThrow('Stack is empty');
  });

});
