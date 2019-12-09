function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

function BinarySearchTree() {
  this.root = null;

  this.findMin = function() {
    let min = Infinity;
    if (!this.root) return null;
    let current = this.root;
    while (current) {
      if (current.value < min) min = current.value;
      current = current.left;
    }
    return min;
  };

  this.findMax = function() {
    let max = -Infinity;
    if (!this.root) return null;
    let current = this.root;
    while (current) {
      if (current.value > max) max = current.value;
      current = current.right;
    }
    return max;
  };
}
