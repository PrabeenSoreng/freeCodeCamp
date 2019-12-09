function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

function BinarySearchTree() {
  this.root = null;

  this.add = function(element) {
    let newNode = new Node(element);
    if (!this.root) {
      this.root = newNode;
      return true;
    } else {
      let current = this.root;
      while (true) {
        if (element === current.value) return null;
        if (element < current.value) {
          if (current.left === null) {
            current.left = newNode;
            return true;
          }
          current = current.left;
        } else if (element > current.value) {
          if (current.right === null) {
            current.right = newNode;
            return true;
          }
          current = current.right;
        }
      }
    }
  };
}
