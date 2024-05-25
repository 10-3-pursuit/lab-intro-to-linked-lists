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
    // insert a new node at the beginning of the list
  insert(data) {
    // create new instance of the node
    let newNode = new Node(data);
    newNode.next = this.head; // replace null value of node to make a new head to start LinkedList
    this.head = newNode; // makes new node the new beginning head
  }
}

module.exports = { Node, LinkedList };
