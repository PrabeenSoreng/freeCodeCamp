// Mine Solution
function diffArray(arr1, arr2) {
  let newArr1 = arr1.filter(el => arr2.indexOf(el) === -1);
  let newArr2 = arr2.filter(el => arr1.indexOf(el) === -1);
  return newArr1.concat(newArr2);
}

// Solution 2
function diffArray(arr1, arr2) {
  return arr1
    .concat(arr2)
    .filter(el => !arr1.includes(el) || !arr2.includes(el));
}

// Solution 3
function diffArray(arr1, arr2) {
  return [...diff(arr1, arr2), ...diff(arr2, arr1)];
  function diff(a, b) {
    return a.filter(el => b.indexOf(el) === -1);
  }
}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));
console.log(
  diffArray(
    ["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"],
    ["diorite", "andesite", "grass", "dirt", "dead shrub"]
  )
);
