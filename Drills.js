class _Node {
  constructor(data, next, prev) {
    this.data = data;
    this.next = next;
    this.prev = prev;
  }
}

class Stack {
  constructor() {
      this.top = null;
  }

  push(data) {
    if(this.top === null) {
      this.top = new _Node(data, null);
      return this.top
    }
    const node = new _Node(data, null, this.top);
    this.top = node;
  }

  pop() {
    const node = this.top;
    this.top = node.next;
    return node.data;
  }
}

function peek(stack) {
  return stack.top.data;
}

function isEmpty(stack) {
  return stack.top.data === null;
}

function display(stack) {
  let currentStack = stack.top

  while(currentStack) {
    console.log(currentStack.data)
    currentStack = currentStack.prev
    
  }
  
}

function remove(item, stack) {
  let currentStack = stack.top 
  let previous = stack.top

  while(currentStack.data !== item) {
    currentStack = currentStack.prev
    previous = currentStack.prev
  }
  previous.next = currentStack.next
  console.log(previous)
  console.log(currentStack)
  currentStack.prev = previous;
}

function main() {
  const starTrek = new Stack();
    starTrek.push('Kirk');
    starTrek.push('Spock');
    starTrek.push('Mccoy');
    starTrek.push('Scotty');
    remove('Mccoy', starTrek);
    display(starTrek);
  }

main();