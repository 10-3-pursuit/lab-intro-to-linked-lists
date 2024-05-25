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
  delete(data) { // needs data parameter (this is what's to be deleted)
    let currentNode = this.head; // node becomes this.head with value of null at first;
    // this is supposed to set up a pointer because can't get to next node by skipping nodes bc not array so needs to start somewhere.
    if (!currentNode) return; //if node is falsy (null) it means there's nothing to delete
    if (currentNode.data === data) { // if the key for the first node matches inputted data (dotting into data which represents actual data)
      currentNode = currentNode.next; // make current head equal next head so it deletes the original head
      return;
    } // but what if you want to delete data that's not in the first node?
    // iterate through list until finding key that's to be deleted
    //This loop is only if node to be deleted isn't the head
    while (currentNode.next) { // so if next node is not falsy (null in this case) continue loop
      if (currentNode.next.data === data) {
        currentNode.next = currentNode.next.next; // deletes the node where the data is at (the next node) and moves to the next next node
        return;
      }
      currentNode = currentNode.next;
    }
  }
  getFirst() { // get first which is the head
    return this.head;
  }
  getLast() {
    // the next one is the last one if there are only 2 nodes for example so maybe reassign the head to the next one so it moves to the next one as long as not null
    while(this.head.next) {
      this.head = this.head.next;
    }
    return this.head;
  }
  search(data) { // find element by key
    // make pointer
    let currentNode = this.head; // needs to start at head
    while (currentNode) { // loop runs until reaches tail (after the tail value is null)
      if (currentNode.data === data) { // if head matches search input return it
        return currentNode;
      } // if head doesn't match data go to next node
      currentNode = currentNode.next
    }
    // if couldn't find data return null;
    return null;
  }
  getKth(k) { // parameter is position of node it's looking for
    let currentNode = this.head; // pointer
    let count = 1; // starts at 1 until reaches Kth: 1 is better than starting at 0 that way you don't have to make condition k-1. Putting k is more clear
    while (currentNode !== null) { // while there are still nodes (bc if no node then value is null)
      if (count === k) { // but if count is already k (user input) or reaches k after counting return current node
          return currentNode; // this is node we want
      }
      count++; // if not k but it's also not null (which means there are more nodes) increase count by one
      currentNode = currentNode.next; // and move to next node. Once count reaches k it'll return currentNode it's at
    }
    return null; // if no kth node it'll return null
  }
  getKthToLast(k) {
      // If the list is empty, return null
      if (!this.head) return null;

      let length = 0;
      let current = this.head; // pointer at start
      while (current) { // get size (use size method for refernce)
        length++;
        current = current.next;
      }
      if (k >= length) return null; // if bigger than length it is null bc node won't exist

      current = this.head; // current is now at the tail but it will get reassigned as the head in order to count backwards from there
      for (let i = 0; i < length - k - 1; i++) { // loop backwards
        current = current.next;
      }
    // the node at position length - k - 1 which is actully k because started count at 0
    return current;
  }
  isEmpty() { // expect(newList.isEmpty()).toBe(true);
    return this.head === null; // returns true if empty
  }
  clear() { // replace linked list with null value (nothing) by making head equal null and since linkedList cn not get to next node until processing current node it'll make list have nothing
    return this.head = null;
  }
}

module.exports = { Node, LinkedList };
