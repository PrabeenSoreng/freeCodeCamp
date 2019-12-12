function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

function BinarySearchTree() {
  this.root = null;

  this.remove = function(element) {
    if (this.root === null) return null;
    let target;
    let parent = null;

    (function findValue(node = this.root) {
      if (element === node.value) target = node;
      else if (element < node.value && node.left !== null) {
        parent = node;
        return findValue(node.left);
      } else if (element < node.left && node.left === null) return null;
      else if (element > node.value && node.right !== null) {
        parent = node;
        return findValue(node.right);
      } else return null;
    }.bind(this)());
    if (target === null) return null;
    let children =
      (target.left !== null ? 1 : 0) + (target.right !== null ? 1 : 0);

    // Case 1: Target has no children...
    if (children === 0) {
      if (target == this.root) {
        this.root = null;
      } else {
        if (parent.left === target) parent.left = null;
        else parent.right = null;
      }
    }
    // Case 2: Target has one child...
    else if (children === 1) {
      let newChild = target.left !== null ? target.left : target.right;
      if (parent === null) {
        target.value = newChild.value;
        target.left = null;
        target.right = null;
      } else if (newChild.value < parent.value) parent.left = newChild;
      else parent.right = newChild;
      target = null;
    }
    // Case 3: Target has two child...
    else if (children === 2) {
      let current = target;
      function rearrange(node) {
        if (node.right !== null) {
          let temp = node.right;
          node.value = temp.value;
          node.right = temp.right;
          rearrange(temp);
        }
        node = null;
      }
      rearrange(current);
    }
  };
}
