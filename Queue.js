class _Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
  }
  

  enqueue(data) {
    const node = new _Node(data);

    if (this.first === null) {
      this.first = node;
    }

    if (this.last) {
      this.last.next = node;
    }
    //make the new node the last item on the queue
    this.last = node;
  }

  dequeue() {
    //if the queue is empty, there is nothing to return
    if (this.first === null) {
      return;
    }
    const node = this.first;
    this.first = this.first.next;
    //if this is the last item in the queue
    if (node === this.last) {
      this.last = null;
    }
    return node.value;
  }
}


function peek(queue) {
  return queue.first.value;
}

function isEmpty(queue) {
  if(queue.first === null) {
    console.log('empty')
    return true;
  }
  else {
    console.log('not empty')
    return false;
  }
}

function display(queue) {
  let currentQueue = queue.first;

  while(currentQueue !== null) {
    console.log(currentQueue.value);
    currentQueue = currentQueue.next;    
  }  
}

function main() {
  let starTrekQ = new Queue();
  starTrekQ.enqueue('Kirk');
  starTrekQ.enqueue('Spock');
  starTrekQ.enqueue('Uhura');
  starTrekQ.enqueue('Sulu');
  starTrekQ.enqueue('Checkov');
  // console.log(peek(starTrekQ));
  // isEmpty(starTrekQ);
  starTrekQ.dequeue();
  starTrekQ.dequeue();
  starTrekQ.dequeue();
  starTrekQ.dequeue();
  display(starTrekQ); 
}

main();