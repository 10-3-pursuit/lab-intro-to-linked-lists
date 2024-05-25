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
  insert(data) { // insert a new node at the beginning of the list
    // create new instance of the node
    let newNode = new Node(data);
    newNode.next = this.head; // replace null value of node to make a new head to start LinkedList
    this.head = newNode; // makes new node the new beginning head
  }
  size() { // counts length of linked list
    let count = 0;
    let node = this.head; // node becomes this.head with value of null at first;
    while (node) { // count node while node isn't falsy (null in this case)
      count++;
      node = node.next; // once node is counted move to next node to see if it's falsy. If it is count it
    }
    return count; // return count once it reaches the end (once it reaches a node with value null which means there is no node there)
  }
  delete() {
    let node = this.head; // node becomes this.head with value of null at first;
    if (!node) return; //if node is falsy (null) it means there's nothing to delete
  }
}

module.exports = { Node, LinkedList };
