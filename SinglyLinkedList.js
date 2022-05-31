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

  pop() {
    let currentNode = this.head;
    while (currentNode.next.next !== null) currentNode = currentNode.next;
    currentNode.next = null;
    this.tail = currentNode;
    this.length--;
  }
}

module.exports.Node = Node;
module.exports.SinglyLinkedList = SinglyLinkedList;