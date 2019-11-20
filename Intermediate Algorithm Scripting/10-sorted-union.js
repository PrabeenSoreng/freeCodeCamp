// Mine Solution
function uniteUnique(...arr) {
  return [...new Set([].concat(...arr))];
}

// Solution 2
function uniteUnique(arr) {
  let args = [...arguments];
  let result = [];
  for (var i = 0; i < args.length; i++) {
    for (var j = 0; j < args[i].length; j++) {
      if (!result.includes(args[i][j])) {
        result.push(args[i][j]);
      }
    }
  }
  return result;
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));
