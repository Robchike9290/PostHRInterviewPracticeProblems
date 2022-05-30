// Create a class to instantiate new singly linked lists with.  Make sure that it has...
// - The ability to push new nodes onto the list with 'next' and 'value' properties
// - The ability to keep track of the length of the list
// - The ability to keep track of which node is the head of the list.
// - The ability to keep track of which node is the tail of the list.
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
    this.tail = null;
    this.prevTail = null;
  }

  push(node) {
    if(!this.length) {
      this.head = node;
      this.tail = node;
    } else {
      this.prevTail = this.tail;
      this.prevTail.next = node;
      this.tail = node;
    }
    this.length++;
  }
}

module.exports.Node = Node;
module.exports.SinglyLinkedList = SinglyLinkedList;