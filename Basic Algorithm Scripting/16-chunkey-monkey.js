function chunkArrayInGroups(arr, size) {
  let resultArr = [];
  for (let el = 0; el < arr.length; el++) {
    let addArr = [];
    for (let i = 0; i < size; i++) {
      if (arr[el] === undefined) break;
      addArr.push(arr[el]);
      el++;
    }
    el--;
    resultArr.push(addArr);
  }
  return resultArr;
}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4));
