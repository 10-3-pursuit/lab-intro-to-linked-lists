const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0];

const words = [
  "the",
  "quick",
  "brown",
  "fox",
  "jumps",
  "over",
  "the",
  "lazy",
  "dog",
];

class Node {
  constructor(data) {
    this.data = data;
    this.next = null
  }
}

class LinkedList {
  constructor(head = null) {
    this.head = head
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
    let current = head;
    let count = 0;

    while (current !== null) {
      if (count === k) {
        return current.data;
      }
      count++;
      current = current.next;
    }

    return null
  }

  getKthToLastElement = (k) => {
    let current = head;
    let length = 0;

    while (current !== null) {
      length++;
      current = current.next;
    }

    current = head;
    for (let i = 0; i < length - k - 1; i++) {
      current = current.next;
    }

    return current !== null ? current.data : null;
  }

  isEmpty() {
    return head === null;
  }

  clear() {
    this.head = null;
  }

  toArray() {
    const result = [];
    let current = head;

    while (current !== null) {
      result.push(current.data);
      current = current.next;
    }

    return result;
  }

  containsDuplicates = () => {
    const set = new Set();
    let current = head;

    while (current !== null) {
      
      if (set.has(current.data)) {
        return true;
      }
     
      set.add(current.data);
      current = current.next;
    }

    
    return false;
  };
  
}

module.exports = {
  nums,
  words,
};
