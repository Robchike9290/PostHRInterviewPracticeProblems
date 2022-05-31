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
  }

  push(node) {
    if (node === undefined) {
      throw "Please input a node to add to the singly linked list";
    }
    if(!this.length) {
      this.head = node;
      this.tail = this.head;
    } else {
      this.tail.next = node;
      this.tail = node;
    }

    this.length++;
    return this;
  }

  pop() {
    if (this.length === 0) {
      return null;
    } else {
      let currentNode = this.head;
      let newTail = currentNode;

      while (currentNode.next) {
        newTail = currentNode;
        currentNode = currentNode.next;
      }

      this.tail = newTail;
      newTail.next = null;
      this.length--;

      if (this.length === 0) {
        this.tail = null;
        this.head = null;
      }

      return currentNode;
    }
  }

  shift() {
    if (this.length === 0) {
      return null;
    }
    let currentHead = this.head;
    this.head = currentHead.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return currentHead;
  }

  unshift() {

  }
}

module.exports.Node = Node;
module.exports.SinglyLinkedList = SinglyLinkedList;