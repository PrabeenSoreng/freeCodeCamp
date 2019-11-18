function findElement(arr, func) {
  for (let el in arr) {
    if (func(arr[el])) return arr[el];
  }
  return undefined;
}

console.log(findElement([1, 3, 5, 8, 4], num => num % 2 === 0));
