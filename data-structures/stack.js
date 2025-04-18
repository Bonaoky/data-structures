const stackPrototype = {
  push(value) {
  if (this.quantity < this.maxSize) {
    this.storage[this.quantity] = value;
    this.quantity++;
  } else {
    throw new Error('Stack overflow');
  }
}
};

function createStack(maxSize = 5) {
  // build your stack object inside this factory function
  let stack = Object.create(stackPrototype);
  stack.storage = {};
  stack.quantity = 0;
  stack.maxSize = maxSize;
  return stack;
}


module.exports = { createStack, stackPrototype };
