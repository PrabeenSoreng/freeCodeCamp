// Solution 1
function steamrollArray(arr) {
  let stack = [...arr];
  let resArr = [];
  while (stack.length) {
    const next = stack.pop();
    if (Array.isArray(next)) stack.push(...next);
    else resArr.push(next);
  }
  return resArr.reverse();
}

// Solution 2
function steamrollArray(arr) {
  return arr.reduce(
    (acc, val) => acc.concat(Array.isArray(val) ? steamrollArray(val) : val),
    []
  );
}

console.log(steamrollArray([1, {}, [], [2, [4]], [3, [[4]]]]));
