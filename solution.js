const { inspect } = require("util");
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
    this.tail = null;
  }
  insert(data) {
    const createdValue = new Node(data);
    if (!this.head) {
      this.head = createdValue;
      this.tail = createdValue;
    } else {
      createdValue.next = this.head;
      this.head = createdValue;
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
  search(data) {
    let node = this.head;
    while (node) {
      if (node.data === data) {
        return node;
      }
      node = node.next;
    }
    return null;
  }

  getKth(k) {
    if (!this.head) return null;
    let node = this.head;
    for (let i = 1; i < k; i++) {
      node = node.next;
    }
    return node;
  }

  getKthToLast(k) {
    const length = this.size();
    const kth = length - k;
    const node = this.getKth(kth);
    return node;
  }

  isEmpty() {
    const length = this.size();
    return length === 0 ? true : false;
  }
  clear() {
    this.head = null;
  }
  toArray() {
    let node = this.head;
    const arr = [];
    if (!this.head) return null;
    while (node) {
      arr.push(node.data);
      node = node.next;
    }
    return arr;
  }
  containsDuplicates() {
    const array = this.toArray();
    const noDuplicates = new Set();
    for (const num of array) {
      if (!noDuplicates.has(num)) {
        noDuplicates.add(num);
      }
    }
    const noDuplicatesArray = [...noDuplicates];
    return noDuplicatesArray.length === array.length ? false : true;
  }
}
const createdList = new LinkedList();
for (const num of nums) {
  createdList.insert(num);
}

// console.log(createdList.size());
// console.log(
//   inspect(createdList, { showHidden: true, colors: true, depth: 12 })
// );
// createdList.delete(2);
console.log(
  inspect(createdList, { showHidden: true, colors: true, depth: 12 })
);
// console.log("First Node", createdList.getFirst());
// console.log("Last Node", createdList.getLast());
// console.log(createdList.containsDuplicates());

module.exports = {
  Node,
  LinkedList,
};
