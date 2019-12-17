function dfs(graph, root) {
  let visitedNodes = [];

  function traverse(node, parent) {
    visitedNodes.push(node);
    let current = graph[node];
    for (let i = 0; i < current.length; i++) {
      if (i === parent) continue;
      if (current[i] === 1) traverse(i, node);
    }
    return;
  }
  traverse(root);
  return visitedNodes;
}

var exDFSGraph = [
  [0, 1, 0, 0],
  [1, 0, 1, 0],
  [0, 1, 0, 1],
  [0, 0, 1, 0]
];

// var exDFSGraph = [
//   [0, 1, 1, 1],
//   [1, 0, 0, 0],
//   [1, 0, 0, 0],
//   [1, 0, 0, 0]
// ];

console.log(dfs(exDFSGraph, 2));
