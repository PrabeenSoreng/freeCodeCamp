// Mine Solution
function sumAll(arr) {
  let max,
    min,
    sum = 0;
  if (arr[0] > arr[1]) {
    max = arr[0];
    min = arr[1];
  } else {
    max = arr[1];
    min = arr[0];
  }

  for (let i = min; i <= max; i++) {
    sum += i;
  }

  return sum;
}

// Solution 2
function sumAll(arr) {
  let max = Math.max(arr[0], arr[1]);
  let min = Math.min(arr[0], arr[1]);
  let sum = 0;
  for (let i = min; i <= max; i++) sum += i;
  return sum;
}

// Solution 3
function sumAll(arr) {
  const startNum = arr[0];
  const endNum = arr[1];
  const numCount = Math.abs(startNum - endNum) + 1;
  return ((startNum + endNum) * numCount) / 2;
}

// Solution 4
function sumAll(arr) {
  let sum = 0;
  for (let i = Math.min(...arr); i <= Math.max(...arr); i++) sum += i;
  return sum;
}

console.log(sumAll([1, 4]));
