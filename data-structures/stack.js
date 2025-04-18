const stackPrototype = {
  push(value) {
  if (this.quantity < this.maxSize) {
    this.storage[this.quantity] = value;
    this.quantity++;
  } else {
    throw new Error('Stack overflow');
  }
}
,
  pop() {
    if (this.quantity > 0) {
      this.quantity--;
      const value = this.storage[this.quantity];
      delete this.storage[this.quantity];
      return value;
    } else {
      throw new Error('Stack underflow');
    }
  },
  size() {
    return this.quantity;
  },
  isEmpty() {
    return this.quantity === 0;
  },
  peek() {
    if (this.quantity > 0) {
      return this.storage[this.quantity - 1];
    } else {
      throw new Error('Stack is empty');
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
