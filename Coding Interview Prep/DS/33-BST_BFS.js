function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

function BinarySearchTree() {
  this.root = null;

  this.levelOrder = function() {
    let node = this.root,
      data = [],
      queue = [];

    if (!node) return null;
    queue.push(node);
    while (queue.length) {
      node = queue.shift();
      data.push(node.value);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return data;
  };

  this.reverseLevelOrder = function() {
    let node = this.root,
      data = [],
      queue = [];

    if (!node) return null;
    queue.push(node);
    while (queue.length) {
      node = queue.shift();
      data.push(node.value);
      if (node.right) queue.push(node.right);
      if (node.left) queue.push(node.left);
    }
    return data;
  };
}
