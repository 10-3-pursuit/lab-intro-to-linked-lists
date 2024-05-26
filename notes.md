# Solution with Notes

```js
const { nums, words } = require("./data/data.js");

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
    let array = []; // to store nodes using .push()
    while (this.head !== null) { // while there are nodes
      //this.head = node
      //this.head.data = value of node
      array.push(this.head.data); // push value of node into array
      this.head = this.head.next; // move to next node then start loop all over again
    }
    return array; // once you get to node that is null (end of list return the array bc entire linked list has been processed)
  }
  containsDuplicates() {
    let currentNode = this.head; // pointer

    while (currentNode) { // while current node isn't null
      let nextNode = currentNode.next;
      // do a while loop to check if currentNode.data is equla to nextNode.data
      while (nextNode) { // and while next node isn't null (if it is it's not a duplicate and there is no next null)
        if (currentNode.data === nextNode.data) { //if it equals eachother there's a duplicate
          return true; // means found a duplicate
        }
          nextNode = nextNode.next; // then move to next node after nextNode.next
      }
      currentNode = currentNode.next; // Move to the next node after currentNode.next (and after doing the loop for next node to check if it's duplicat)
    }
    return false; // after going through the loops there were no duplicates found 
  }  
}

// words array
// --- make instances of new Node and LinkedList by using Nodes as "elements" of the LinkedList ---

let head = new Node(words[0]); // make head node with the first word
let tail = head; // tail as the head so that it isn't null and there's a next node
let linkedListWords = new LinkedList(head); // make linked list with the head node
for (let i = 1; i < words.length; i++) {
  let currentNode = new Node(words[i]); // create new node for the current word
  tail.next = currentNode; // current node is the end of the list
  tail = currentNode; // update the tail to the current node so it finishes iterating through whole array 9 to convert to linkedList
}

// console.log(linkedList);
console.log(inspect(linkedListWords, { showHidden: true, colors: true, depth: Infinity }));

// nums array
let headNums = new Node(nums[0]); // make head node with the first word
let tailNums = headNums ; // tail as the head so that it isn't null and there's a next node
let linkedListNums = new LinkedList(headNums); // make linked list with the head node
for (let i = 1; i < nums.length; i++) {
  let currentNode = new Node(nums[i]); // create new node for the current word
  tailNums.next = currentNode; // current node is the end of the list
  tailNums = currentNode; // update the tail to the current node so it finishes iterating through whole array 9 to convert to linkedList
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
```