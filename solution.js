const { nums, words } = require("./data/data.js");

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insert(data) {
    const newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
  }

  size() {
    let count = 0;
    let current = this.head;
    while (current) {
      count++;
      current = current.next;
    }
    return count;
  }

  delete(key) {
    if (!this.head) {
      return;
    }

    if (this.head.data === key) {
      this.head = this.head.next;
      return;
    }

    let current = this.head;
    let previous = null;
    while (current && current.data !== key) {
      previous = current;
      current = current.next;
    }

    if (current) {
      previous.next = current.next;
    }
  }

  getFirst() {
    return this.head ? this.head : null;
  }

  getLast() {
    if (!this.head) {
      return null;
    }

    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    return current;
  }

  search(key) {
    let current = this.head;
    while (current) {
      if (current.data === key) {
        return current;
      }
      current = current.next;
    }
    return null;
  }

  getKth(k) {
    let current = this.head;
    let count = 1;

    while (current) {
      if (count === k) {
        return current;
      }
      count++;
      current = current.next;
    }
    return null;
  }

  getKthToLast(k){
    const length = this.size()
    const target = length - k
    return this.getKth(target)
  }

  isEmpty() {
    return this.head === null;
  }

  clear() {
    this.head = null;
  }

  toArray() {
    const array = [];
    let current = this.head;
    while (current) {
      array.push(current.data);
      current = current.next;
    }
    return array;
  }

  containsDuplicates() {
    const seen = new Set();
    let current = this.head;

    while (current) {
      if (seen.has(current.data)) {
        return true;
      }
      seen.add(current.data);
      current = current.next;
    }

    return false;
  }
}

module.exports = {
  Node,
  LinkedList,
};
