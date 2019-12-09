function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

function BinarySearchTree() {
  this.root = null;

  this.isPresent = function(element) {
    if (!this.root) return false;
    let current = this.root;
    let found = false;

    while (!found && current) {
      if (element < current.value) current = current.left;
      else if (element > current.value) current = current.right;
      else found = true;
    }
    if (!found) return undefined;
    return current;
  };
}
