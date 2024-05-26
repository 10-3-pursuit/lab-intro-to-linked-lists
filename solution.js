const { nums, words } = require("./data/data.js");
const { inspect } = require("util");

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
class LinkedList {
  constructor(head = null) {
    this.head = head;
  }
  insert(data) {
    let newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
  }
  size() {
    let count = 0;
    let node = this.head;
    while (node) {
      count++;
      node = node.next;
    }
    return count;
  }
  delete(data) {
    let currentNode = this.head;
    if (!currentNode) return;
    if (currentNode.data === data) {
      currentNode = currentNode.next;
      return;
    }
    while (currentNode.next) {
      if (currentNode.next.data === data) {
        currentNode.next = currentNode.next.next;
        return;
      }
      currentNode = currentNode.next;
    }
  }
  getFirst() {
    return this.head;
  }
  getLast() {
    while(this.head.next) {
      this.head = this.head.next;
    }
    return this.head;
  }
  search(data) {
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.data === data) {
        return currentNode;
      }
      currentNode = currentNode.next
    }
    return null;
  }
  getKth(k) {
    let currentNode = this.head;
    let count = 1;
    while (currentNode !== null) {
      if (count === k) {
          return currentNode;
      }
      count++;
      currentNode = currentNode.next;
    }
    return null; 
  }
  getKthToLast(k) {
      if (!this.head) return null;

      let length = 0;
      let current = this.head;
      while (current) {
        length++;
        current = current.next;
      }
      if (k >= length) return null;
      current = this.head;
      for (let i = 0; i < length - k - 1; i++) { 
        current = current.next;
      }
    return current;
  }
  isEmpty() {
    return this.head === null;
  }
  clear() {
    return this.head = null;
  }
  toArray() {
    let array = [];
    while (this.head !== null) {
      array.push(this.head.data);
      this.head = this.head.next;
    }
    return array;
  }
  containsDuplicates() {
    let currentNode = this.head;
    while (currentNode) {
      let nextNode = currentNode.next;
      while (nextNode) {
        if (currentNode.data === nextNode.data) {
          return true;
        }
          nextNode = nextNode.next;
      }
      currentNode = currentNode.next;
    }
    return false;
  }  
}

// words array to words linked list
let head = new Node(words[0]);
let tail = head;
let linkedListWords = new LinkedList(head);
for (let i = 1; i < words.length; i++) {
  let currentNode = new Node(words[i]);
  tail.next = currentNode;
  tail = currentNode;
}

console.log(inspect(linkedListWords, { showHidden: true, colors: true, depth: Infinity }));

// nums array to words linked list
let headNums = new Node(nums[0]);
let tailNums = headNums;
let linkedListNums = new LinkedList(headNums);
for (let i = 1; i < nums.length; i++) {
  let currentNode = new Node(nums[i]);
  tailNums.next = currentNode;
  tailNums = currentNode;
}
console.log(inspect(linkedListNums, { showHidden: true, colors: true, depth: Infinity }));

// --- Logged to the Console when node solution.js runs ---
/*
LinkedList {
  head: Node {
    data: 'the',
    next: Node {
      data: 'quick',
      next: Node {
        data: 'brown',
        next: Node {
          data: 'fox',
          next: Node {
            data: 'jumps',
            next: Node {
              data: 'over',
              next: Node {
                data: 'the',
                next: Node {
                  data: 'lazy',
                  next: Node { data: 'dog', next: null }
                }
              }
            }
          }
        }
      }
    }
  }
}
LinkedList {
  head: Node {
    data: 1,
    next: Node {
      data: 2,
      next: Node {
        data: 3,
        next: Node {
          data: 4,
          next: Node {
            data: 5,
            next: Node {
              data: 6,
              next: Node {
                data: 7,
                next: Node {
                  data: 8,
                  next: Node {
                    data: 9,
                    next: Node {
                      data: 10,
                      next: Node { data: 0, next: null }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
*/ 

module.exports = { Node, LinkedList };
