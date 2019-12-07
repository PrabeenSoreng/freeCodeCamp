let Node = function(data, prev = null) {
  this.data = data;
  this.prev = prev;
  this.next = null;
};

let DoublyLinkedList = function() {
  this.head = null;
  this.tail = null;
  this.length = 0;

  this.add = function(data) {
    let newNode = new Node(data, this.prev);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  };

  this.reverse = function() {
    let temp = null;
    let currentNode = this.head;

    if (this.head === null) return null;

    this.tail = currentNode;
    while (currentNode) {
      temp = currentNode.prev;
      currentNode.prev = currentNode.next;
      currentNode.next = temp;
      currentNode = currentNode.prev;
    }

    if (temp != null) this.head = temp.prev;
  };
};
