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
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
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
        let prev = null;
        let current = this.head;
        while (current && current.data !== key) {
            prev = current;
            current = current.next;
        }
        if (!current) {
            return; // Key not found
        }
        prev.next = current.next;
    }

    getFirst() {
        return this.head ? this.head.data : null;
    }

    getLast() {
        if (!this.head) {
            return null;
        }
        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        return current.data;
    }

    search(key) {
        let current = this.head;
        while (current) {
            if (current.data === key) {
                return current.data;
            }
            current = current.next;
        }
        return null;
    }

    getKth(k) {
        let current = this.head;
        let count = 0;
        while (current) {
            if (count === k) {
                return current.data;
            }
            count++;
            current = current.next;
        }
        return null;
    }

    getKthToLast(k) {
        let slow = this.head;
        let fast = this.head;
        for (let i = 0; i < k; i++) {
            if (!fast) {
                return null; // List is too short
            }
            fast = fast.next;
        }
        while (fast.next) {
            slow = slow.next;
            fast = fast.next;
        }
        return slow.data;
    }

    isEmpty() {
        return !this.head;
    }

    clear() {
        this.head = null;
    }

    toArray() {
        const result = [];
        let current = this.head;
        while (current) {
            result.push(current.data);
            current = current.next;
        }
        return result;
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

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0];
const panagram = [
    "The",
    "quick",
    "brown",
    "fox",
    "jumps",
    "over",
    "the",
    "lazy",
    "dog",
];

const list = new LinkedList();
nums.forEach(num => list.insert(num));
// console.log(list.size());
console.log(list.delete());


list.insert(5);
console.log(list.containsDuplicates());

list.delete(5); 
console.log(list.containsDuplicates());