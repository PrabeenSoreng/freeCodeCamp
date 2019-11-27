function bubbleSort(arr) {
  let noSwap;
  let temp;
  for (let i = 0; i <= arr.length; i++) {
    noSwap = true;
    for (let j = 0; j < arr.length - i; j++) {
      if (arr[j] > arr[j + 1]) {
        noSwap = false;
        temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
    if (noSwap) break;
  }
  return arr;
}

console.log(bubbleSort([1, 2, 3, 4, 5]));
