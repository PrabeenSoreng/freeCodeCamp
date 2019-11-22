// Mine Solution
function addTogether() {
  let args = [...arguments];
  if (!checkNumber(args)) return undefined;
  if (args.length == 1) {
    return function(...args2) {
      if (!checkNumber(args2)) return undefined;
      return args.concat(args2).reduce((acc, val) => acc + val);
    };
  } else return args.reduce((acc, val) => acc + val);
}

function checkNumber(nums) {
  return nums.every(el => typeof el === "number");
}

// Solution 2
function addTogether() {
  var args = Array.from(arguments);
  return args.some(n => typeof n !== "number")
    ? undefined
    : args.length > 1
    ? args.reduce((acc, n) => (acc += n), 0)
    : n => (typeof n === "number" ? n + args[0] : undefined);
}

console.log(addTogether(2, 3));
let sumTwoAnd = addTogether(2);
console.log(sumTwoAnd(3));
