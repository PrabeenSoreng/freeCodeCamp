function isSorted(arr) {
  let check = i =>
    i == arr.length - 1 ? true : arr[i] > arr[i + 1] ? false : check(i + 1);
  return check(0);
}

let array = new Array();
(function createArray(size = 5) {
  array.push(+(Math.random() * 100).toFixed(0));
  return size > 1 ? createArray(size - 1) : undefined;
})(15);

let MinHeap = function() {
  this.values = [];

  this.print = function() {
    return this.values;
  };

  this.insert = function(element) {
    this.values.push(element);
    (function bubbleUp() {
      let idx = this.values.length - 1;
      let value = this.values[idx];
      while (idx > 0) {
        let parentIdx = Math.floor((idx - 1) / 2);
        let parent = this.values[parentIdx];
        if (value >= parent) break;
        this.values[parentIdx] = value;
        this.values[idx] = parent;
        idx = parentIdx;
      }
    }.bind(this)());
  };

  this.remove = function() {
    let min = this.values[0];
    let end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      (function sinkDown() {
        let idx = 0;
        let length = this.values.length;
        let value = this.values[0];
        let leftChild, leftChildIdx, rightChild, rightChildIdx, swap;
        while (true) {
          leftChildIdx = idx * 2 + 1;
          rightChildIdx = idx * 2 + 2;
          swap = null;
          if (leftChildIdx < length) {
            leftChild = this.values[leftChildIdx];
            if (leftChild < value) swap = leftChildIdx;
          }
          if (rightChildIdx < length) {
            rightChild = this.values[rightChildIdx];
            if (
              (swap === null && rightChild < value) ||
              (swap !== null && rightChild < leftChild)
            )
              swap = rightChildIdx;
          }
          if (swap === null) break;
          this.values[idx] = this.values[swap];
          this.values[swap] = value;
          idx = swap;
        }
      }.bind(this)());
    }
    return min;
  };

  this.sort = function() {
    for (let value of array) {
      this.insert(value);
    }
    let sortedArr = [];
    let length = this.values.length;
    let count = 0;
    while (count < length) {
      sortedArr.push(this.remove());
      count++;
    }
    return sortedArr;
  };
};

let minHeap = new MinHeap();
// minHeap.insert(10);
// minHeap.insert(1);
// minHeap.insert(4);
// minHeap.insert(5);
// minHeap.insert(8);
// minHeap.insert(2);
// console.log(minHeap.print());
// console.log(minHeap.remove());

console.log(minHeap.sort());

// console.log(minHeap.print());
// console.log(minHeap.remove());
// console.log(minHeap.print());
// console.log(minHeap.remove());
// console.log(minHeap.print());
// console.log(minHeap.remove());
// console.log(minHeap.print());
// console.log(minHeap.remove());
// console.log(minHeap.print());
// console.log(minHeap.remove());
// console.log(minHeap.print());
// console.log(minHeap.remove());
// console.log(minHeap.print());
