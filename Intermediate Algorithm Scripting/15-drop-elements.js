function dropElements(arr, func) {
  let elements = [...arr];
  for (let i = 0; i <= elements.length; i++) {
    if (!func(i + 1)) {
      console.log(i);
      arr.splice(0, 1);
    }
  }
  return arr;
}

// Solution 2
function dropElements(arr, func) {
  let times = arr.length;
  for (var i = 0; i < times; i++) {
    if (func(arr[0])) break;
    else arr.shift();
  }
  return arr;
}

console.log(dropElements([1, 2, 3, 9, 2], n => n > 2));
