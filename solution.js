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
  constainsDuplicates() {

  }
}

module.exports = { Node, LinkedList };
