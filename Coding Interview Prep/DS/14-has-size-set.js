function checkSet(arrToBeSet, checkValue) {
  let set = new Set([...arrToBeSet]);
  let hasTwo = set.has(2);
  let size = set.size;
  return [hasTwo, size];
}

console.log(checkSet([1, 2, 3], 2));
