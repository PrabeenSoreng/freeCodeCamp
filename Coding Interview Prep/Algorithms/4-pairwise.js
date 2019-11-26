function pairwise(arr, arg) {
  if (arr.length == 0) return 0;
  let indicesIndex = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j <= arr.length; j++) {
      let sum = arr[i] + arr[j];
      if (
        sum == arg &&
        !indicesIndex.includes(i) &&
        !indicesIndex.includes(j)
      ) {
        indicesIndex.push(i, j);
      }
    }
  }
  return indicesIndex.reduce((acc, val) => acc + val);
}

console.log(pairwise([1, 4, 2, 3, 0, 5], 7));
console.log(pairwise([1, 1, 1], 2));
console.log(pairwise([0, 0, 0, 0, 1, 1], 1));
