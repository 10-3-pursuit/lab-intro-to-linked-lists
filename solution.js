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
    if (!this.head) {
      this.head = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
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
    let node = this.head;
    let counter = 0;
    while (node.data !== data && node.next) {
      counter++;
      node = node.next;
    }
    let foundNode = node;
    node = this.head;
    for (let i = 1; i < counter; i++) {
      node = node.next;
    }
    node.next = foundNode.next;
  }
  getFirst() {
    return this.head;
  }
  getLast() {
    let node = this.head;
    if (!this.head) return null;
    while (node.next) {
      node = node.next;
    }
    return node;
  }
  search(key) {
    let node = this.head;
    while (node !== null && node.data !== key) {
      node = node.next;
    }
    return node;
  }
  getKth(k) {
    const length = this.size();
    if (k < 1 || k > length || !this.head) return null;
    if (k === 1) return this.head;
    let node = this.head;
    for (let i = 1; i < k; i++) {
      node = node.next;
    }
    return node;
  }
  getKthToLast(k) {
    const length = this.size();
    const target = length - k;
    return this.getKth(target);
  }
  isEmpty() {
    return !this.head ? true : false;
  }
  clear() {
    this.head = null;
  }
  toArray() {
    const length = this.size();
    const linkedListArr = [];
    let node = this.head;
    for (let i = 1; i <= length; i++) {
      linkedListArr.push(node.data);
      node = node.next;
    }
    return linkedListArr;
  }
  containsDuplicates() {
    const listToArray = this.toArray();
    const arrayWithoutDups = new Set([...listToArray]);
    return listToArray.length !== arrayWithoutDups.size;
  }
}

module.exports = {
  Node,
  LinkedList,
};
