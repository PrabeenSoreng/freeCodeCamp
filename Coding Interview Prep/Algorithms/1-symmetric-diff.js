function sym(...args) {
  let result = [],
    newArr = [];
  let count;
  args = args.map(arr => [...new Set(arr)]);
  result = args[0];
  for (let i = 0; i < args.length - 1; i++) {
    newArr = result.concat(args[i + 1]);
    result = [];
    for (let i = 0; i < newArr.length; i++) {
      count = 0;
      for (let j = 0; j < newArr.length; j++) {
        if (newArr[i] == newArr[j]) count++;
      }
      if (count == 1) result.push(newArr[i]);
    }
  }
  return result;
}

console.log(sym([1, 2, 5], [2, 3, 5], [3, 4, 5]));
