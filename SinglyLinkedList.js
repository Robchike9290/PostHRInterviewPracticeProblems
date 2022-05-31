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
    let newTail;

    while (currentNode.next) {
      newTail = currentNode;
      currentNode = currentNode.next;
    }

    currentNode.next = null;
    this.tail = newTail;
    this.length--;

    if (this.length === 0) {
      this.tail = null;
      this.head = null;
    }
  }

  shift() {
    if (this.head === null || this.head.next === null) {
      throw "Cannot shift nodes in a linked list less than two nodes in length";
    }
    let currentHead = this.head;
    this.head = currentHead.next;
    currentHead = null;
    this.length--;
  }
}

module.exports.Node = Node;
module.exports.SinglyLinkedList = SinglyLinkedList;