function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

function BinarySearchTree() {
  this.root = null;

  this.invert = function() {
    if (!this.root) return null;
    function traverse(node) {
      if (node.right) {
        let temp = node.right;
        node.right = node.left;
        node.left = temp;
        return traverse(node.left);
      }
      if (node.left) {
        let temp = node.left;
        node.left = node.right;
        node.right = temp;
        return traverse(node.right);
      }
    }
    traverse(this.root);
  };
}
