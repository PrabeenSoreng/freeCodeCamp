function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

function BinarySearchTree() {
  this.root = null;
}

function isBinarySearchTree(tree) {
  if (!tree.root) return null;
  else {
    let isBST = true;
    function checkTree(node) {
      if (node.left != null) {
        const left = node.left;
        if (left.value > node.value) isBST = false;
        else checkTree(left);
      }
      if (node.right != null) {
        const right = node.right;
        if (right.value < node.value) isBST = false;
        else checkTree(right);
      }
    }
    checkTree(tree.root);
    return isBST;
  }
}
