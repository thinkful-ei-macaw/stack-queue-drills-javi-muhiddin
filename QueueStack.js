class _Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }

  push(data) {
    if(this.top === null) {
      this.top = new _Node(data, null);
      return this.top;
    }
    const node = new _Node(data, this.top);
    this.top = node;
  }

  pop() {
    const node = this.top;
    this.top = node.next; // 
    return node.data;
  }
}


class QueueStack {
  constructor() {
    this.s1 = new Stack();
    this.s2 = new Stack();
  }
  

  enqueue(data) {
    this.s1.push(data);
  }

  dequeue() {
    if(this.s1 && this.s2) {
      while(this.s1.top) {
        let p = this.s1.pop();
        this.s2.push(p);
      }
    }
    return this.s2.pop();
  }
}



function main() {
  let qS = new QueueStack();
  qS.enqueue('Kirk');
  qS.enqueue('Spock');
  qS.enqueue('Uhura');
  qS.enqueue('Sulu');
  qS.enqueue('Checkov');
  console.log(qS);
}

main();