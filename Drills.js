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

function peek(stack) {
  return stack.top;
}

function isEmpty(stack) {
  return stack.top.data === null;
}

function display(stack) {
  let currentStack = stack.top;

  while(currentStack !== null) {
    console.log(currentStack.data);
    currentStack = currentStack.next;    
  }  
}

function is_palindrome(word) {
  let s = new Stack();
  for (let i = 0; i < word.length; i++) {
    s.push(word[i]);
  }
  let rword = '';
  let currentS = s.top;
  while (currentS !== null) {
    currentS = currentS.next;
    rword += s.pop();
  }
  if (word === rword) {
    return true;
  }
  else {
    return false;
  }
}

function matchP(str) {
  let stack = new Stack();
  for (let i = 0; i < str.length; i++) {
    stack.push(str[i]);
  }
  let countOpen = 0;
  let countClose = 0;
  while(stack.top) {
    let char = stack.pop();
    if(char === '(') {
      countOpen++;
      console.log(countOpen);
    }
    if(char === ')'){
      countClose++;
    }        
  }
  if(countOpen > countClose) {
    console.log('You are missing )');
  } else if(countOpen < countClose){
    console.log('You are missing (');
  }
  else {
    console.log('nothing');
  }
}



function sortStack(stack) {
  let tempStack = new Stack();

  while (stack.top) {
    var tmp = stack.pop();

    while (tempStack.top && tempStack.top.data < tmp) {
      stack.push(tempStack.pop());
    }
    tempStack.push(tmp);
  }

  display(tempStack);
}

function main() {
  // const starTrek = new Stack();
  // starTrek.push('Kirk');
  // starTrek.push('Spock');
  // starTrek.push('Mccoy');
  // starTrek.push('Scotty');
  // starTrek.pop();
  // starTrek.pop();
  // display(starTrek);
  //console.log(is_palindrome('aoa'));
  // matchP('(hi(sjfsl)))');
  let s1 = new Stack();
  s1.push(3);
  s1.push(6);
  s1.push(1);
  s1.push(2);
  s1.push(5);
  s1.push(4);

  sortStack(s1);
}

main();