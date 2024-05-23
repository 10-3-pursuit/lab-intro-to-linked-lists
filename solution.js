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

  // insert
  insert(data) {
    let newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
  }

  // size
  size() {
    // This function calculates the size of the linked list
    let count = 0; // Initialize a counter to keep track of the number of nodes
    let node = this.head; // Start from the head of the linked list

    // Traverse the linked list until reaching the end (node is null)
    while (node) {
      count++; // Increment the counter
      node = node.next; // Move to the next node
    }

    return count; // Return the total number of nodes in the linked list
  }

  // Delete - Let's delete a node with a specific key.
  delete(data) {
    // This function deletes a node with the given data from a linked list
    let node = this.head; // Start from the head of the linked list
    let counter = 0; // Initialize a counter to keep track of the position of the node

    // Traverse the linked list until either the data is found or the end is reached
    while (node.data !== data && node.next) {
      counter++; // Increment the counter
      node = node.next; // Move to the next node
    }

    let foundNode = node; // Store the found node

    node = this.head; // Reset node to the head of the linked list

    // Traverse the linked list again to find the node before the found node
    for (let i = 1; i < counter; i++) {
      node = node.next; // Move to the next node
    }

    // Update the next pointer of the node before the found node to skip the found node
    node.next = foundNode.next;
  }

  // get first
  getFirst() {
    // Method to get the first node of the linked list
    return this.head; // Return the head of the linked list
  }

  // get last
  getLast() {
    // Method to get the last node of the linked list
    let node = this.head; // Start from the head of the linked list
    if (!this.head) return null; // If the linked list is empty (no head), return null

    // Traverse the linked list until reaching the last node (where node.next is null)
    while (node.next) {
      node = node.next; // Move to the next node
    }

    return node; // Return the last node of the linked list
  }

  // search
  search(key) {
    // Method to search for a node with a specific key in the linked list
    let node = this.head; // Start from the head of the linked list

    // Traverse the linked list until either reaching the end or finding the node with the key
    while (node !== null && node.data !== key) {
      node = node.next; // Move to the next node
    }

    return node; // Return the node found (which could be null if not found)
  }

  // get kth element

  getKth(k) {
    let node = this.head;
    if ((k = 0)) return this.head;
    for (let i = 1; i <= k; i++) {
      node = node.next;
    }
    return node;
  }

  //clear
  clear() {
    this.head = null;
  }

  // isEmpty
  isEmpty() {
    // Check if the head of the linked list is null
    return !this.head;
  }

  // toArray
  toArray() {
    // Initialize an empty array to store the data
    let array = [];

    // Start from the head of the linked list
    let current = this.head;

    // Traverse the linked list and push the data of each node into the array
    while (current) {
      array.push(current.data); // Push the data of the current node
      current = current.next; // Move to the next node
    }

    // Return the array containing the data of the linked list
    return array;
  }

  // containsDuplicates() {
  //   // Initialize a hash set to store unique values
  //   let set = new Set();

  //   // Start from the head of the linked list
  //   let current = this.head;

  //   // Traverse the linked list
  //   while (current !== null) {
  //     // If the value of the current node is already in the set, return true (contains duplicates)
  //     if (set.has(current.data)) {
  //       return true;
  //     }
  //     // Add the value of the current node to the set
  //     set.add(current.data);
  //     // Move to the next node
  //     current = current.next;
  //   }

  //   // If no duplicates are found, return false
  //   return false;
  // }

  containsDuplicates() {
    // Start from the head of the linked list
    let current = this.head;

    // Traverse the linked list
    while (current !== null) {
      let nextNode = current.next; // Start a nextNode from the node after current

      // Compare the data of current node with all the following nodes
      while (nextNode !== null) {
        // If the data of any following node matches the data of current node, return true (contains duplicates)
        if (current.data === nextNode.data) {
          return true;
        }
        // Move the nextNode to the next node
        nextNode = nextNode.next;
      }

      // Move to the next node
      current = current.next;
    }

    // If no duplicates are found, return false
    return false;
  }
}

module.exports = {
  Node,
  LinkedList,
};
