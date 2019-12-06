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
      while (currentNode.next) {
        currentNode = currentNode.next;
      }
      currentNode.next = node;
    }
    length++;
  };

  this.removeAt = function(index) {
    let elementIndex = 0;
    let element;
    if (index < 0) return null;
    if (index >= length) return null;
    if (index === elementIndex) {
      element = head.element;
      head = head.next;
      length--;
      return element;
    }

    let previous = head;
    while (previous) {
      let current = previous.next;
      elementIndex++;
      if (current) {
        if (elementIndex === index) {
          length--;
          previous.next = current.next;
          return current.element;
        }
      }
      current = previous;
    }
    return null;
  };
}
