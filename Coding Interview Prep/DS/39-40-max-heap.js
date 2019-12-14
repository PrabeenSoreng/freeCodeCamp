let MaxHeap = function() {
  this.values = [];

  this.insert = function(element) {
    this.values.push(element);
    (function bubbleUp() {
      let idx = this.values.length - 1;
      const value = this.values[idx];
      while (idx > 0) {
        let parentIdx = Math.floor((idx - 1) / 2);
        let parent = this.values[parentIdx];
        if (value <= parent) break;
        this.values[parentIdx] = value;
        this.values[idx] = parent;
        idx = parentIdx;
      }
    }.bind(this)());
  };

  this.remove = function() {
    let max = this.values[0];
    let end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      (function sinkDown() {
        let idx = 0;
        let length = this.values.length;
        let value = this.values[0];
        let leftChild, leftChildIdx, rightChild, rightChildIdx, swap;
        while (true) {
          leftChildIdx = 2 * idx + 1;
          rightChildIdx = 2 * idx + 2;
          swap = null;
          if (leftChildIdx < length) {
            leftChild = this.values[leftChildIdx];
            if (leftChild > value) swap = leftChildIdx;
          }
          if (rightChildIdx < length) {
            rightChild = this.values[rightChildIdx];
            if (
              (swap === null && rightChild > value) ||
              (swap !== null && rightChild > leftChild)
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
    return max;
  };

  this.print = function() {
    return this.values;
  };
};

let maxHeap = new MaxHeap();
maxHeap.insert(37);
maxHeap.insert(49);
maxHeap.insert(22);
maxHeap.insert(6);
maxHeap.insert(63);
maxHeap.insert(30);
console.log(maxHeap.print());

console.log(maxHeap.remove());
console.log(maxHeap.print());
