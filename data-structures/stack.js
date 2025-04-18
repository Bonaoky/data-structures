function createStack(maxSize = 5) {
  // build your stack object inside this factory function
  let stack = {};
  stack.storage = {};
  stack.quantity = 0;
  stack.maxSize = maxSize;
  return stack;
}

module.exports = { createStack };
