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

  this.remove = function(element) {
    if (head.element === element) {
      head = head.next;
      return length--;
    }
    let previous = head;
    while (previous) {
      let current = previous.next;
      if (current) {
        if (current.element === element) {
          previous.next = current.next;
          return length--;
        }
      }
      previous = current;
    }
  };

  this.isEmpty = function() {
    if (head === null) {
      return true;
    }
    return false;
  };

  this.indexOf = function(element) {
    let index = 0;
    if (head.element === element) return index;
    let previous = head;
    while (previous) {
      let current = previous.next;
      index++;
      if (current) {
        if (current.element === element) {
          return index;
        }
      }
      previous = current;
    }
    return -1;
  };

  this.elementAt = function(index) {
    let elementIndex = 0;
    if (index === 0) return head.element;

    let previous = head;
    while (previous) {
      let current = previous.next;
      elementIndex++;
      if (current) {
        if (index === elementIndex) {
          return current.element;
        }
      }
      previous = current;
    }
    return undefined;
  };
}
