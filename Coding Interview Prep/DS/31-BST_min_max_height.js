function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

function BinarySearchTree() {
  this.root = null;

  this.findMinHeight = function(root = this.root) {
    if (!root) return -1;
    if (!root.left && !root.right) return 0;
    if (!root.left) return this.findMinHeight(root.right) + 1;
    if (!root.right) return this.findMinHeight(root.left) + 1;

    const lHeight = this.findMinHeight(root.left);
    const rHeight = this.findMinHeight(root.height);
    return Math.min(lHeight, rHeight) + 1;
  };

  this.findMaxHeight = function(root = this.root) {
    if (!root) return -1;
    if (!root.left && !root.right) return 0;
    if (!root.left) return this.findMaxHeight(root.right) + 1;
    if (!root.right) return this.findMaxHeight(root.left) + 1;

    const lHeight = this.findMaxHeight(root.left);
    const rHeight = this.findMaxHeight(root.right);
    return Math.max(lHeight, rHeight) + 1;
  };

  this.isBalanced = function(root = this.root) {
    if (!root) return true;
    if (!root.left && !root.right) return true;
    if (!root.left) return this.findMaxHeight(root.right) <= 0;
    if (!root.right) return this.findMaxHeight(root.left) <= 0;

    const lHeight = this.findMaxHeight(root.left);
    const rHeight = this.findMaxHeight(root.right);
    if (Math.abs(lHeight - rHeight) > 1) return false;
    return this.isBalanced(root.left) && this.isBalanced(root.right);
  };
}
