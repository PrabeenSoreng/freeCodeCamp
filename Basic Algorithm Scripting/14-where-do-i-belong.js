function getIndexToInsert(arr, num) {
  arr.sort((a, b) => a - b);
  if (arr.length === 0) return 0;
  for (let el = 0; el <= arr.length; el++) {
    if (arr[el] >= num) return el;
    if (arr[el] === undefined) return el;
  }
}

console.log(getIndexToInsert([10, 20, 30, 40, 50], 45));
console.log(getIndexToInsert([5, 2, 10], 11));
