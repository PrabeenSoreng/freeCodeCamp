function LinkedList() {
  let length = 0;
  let head = null;

  let Node = function(element) {
    this.element = element;
    this.next = null;
  };

  this.size = function() {
    return length;
  };

  this.head = function() {
    return head;
  };

  this.add = function(element) {
    let node = new Node(element);
    if (head === null) head = node;
    else {
      let currentNode = head;
      while (currentNode.next) currentNode = currentNode.next;
      currentNode.next = node;
    }
    length++;
  };

  this.addAt = function(index, element) {
    let node = new Node(element);
    let elementIndex = 0;
    if (index < 0) return false;
    if (index >= length) return false;
    if (index === elementIndex) {
      let previousHead = head;
      head = node;
      head.next = previousHead;
      length++;
      return true;
    }
    let previous = head;
    while (previous) {
      let current = previous.next;
      elementIndex++;
      if (current) {
        if (elementIndex === index) {
          // let currentHead = current;
          previous.next = node;
          previous.next.next = current;
          length++;
          return true;
        }
      }
      previous = current;
    }
    return false;
  };
}
