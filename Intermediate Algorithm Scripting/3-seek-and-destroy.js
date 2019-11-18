// Mine Solution
function destroyer(arr, ...args) {
  return arr.filter(el => !args.includes(el));
}

// Solution 2
function destroyer(arr) {
  let args = Array.prototype.slice.call(arguments);

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < args.length; j++) {
      if (arr[i] === args[j]) delete arr[i];
    }
  }
  return arr.filter(Boolean);
}

// Solution 3
function destroyer(arr) {
  let args = Array.from(arguments).slice(1);
  return arr.filter(el => !args.includes(el));
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
console.log(destroyer(["tree", "hamburger", 53], "tree", 53));
