let Node = function(data, prev = null) {
  this.data = data;
  this.prev = prev;
  this.next = null;
};

let DoublyLinkedList = function() {
  this.head = null;
  this.tail = null;
  this.length = 0;

  this.add = function(element) {
    let newNode = new Node(element, this.prev);
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

  this.remove = function(element) {
    if (this.length === 0) return null;
    if (this.tail.data === element) {
      this.tail = this.tail.prev;
      this.tail.next = null;
      this.length--;
      return true;
    }
    if (this.head.data === element) {
      this.head = this.head.next;
      this.length--;
      return true;
    }
    let head = this.head;
    while (head) {
      let current = this.head.next;
      if (current) {
        if (current.data === element) {
          current.next.prev = current.prev;
          current.next = null;
          this.length--;
          return true;
        }
      }
      head = current;
      return null;
    }
  };
};
