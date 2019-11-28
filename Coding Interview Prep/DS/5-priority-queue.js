function PriorityQueue() {
  this.collection = [];
  this.printCollection = function() {
    console.log(this.collection);
  };
  this.swap = function(arr, i, j) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
  };

  this.enqueue = function(node) {
    this.collection.push(node);
    this.bubbleUp();
  };
  this.bubbleUp = function() {
    let i = this.size() - 1;
    let node = this.collection[i];

    while (true) {
      let parent = Math.floor((i - 1) / 2);
      if (parent < 0) return;
      if (this.collection[parent][1] > node[1]) {
        this.swap(this.collection, parent, i);
        i = parent;
      } else break;
    }
  };

  this.dequeue = function() {
    if (this.isEmpty()) return;
    if (this.size() === 1) return this.collection.pop()[0];

    let pop = this.collection[0];
    this.collection[0] = this.collection.pop();
    this.bubbleDown();
    return pop[0];
  };
  this.bubbleDown = function() {
    let node = this.collection[0];
    let i = 0;

    while (true) {
      let child1 = 2 * i + 1;
      let child2 = 2 * i + 2;
      if (child2 >= this.size()) return;
      let min =
        this.collection[child1][1] > this.collection[child2][1]
          ? child2
          : child1;
      if (this.collection[min][1] < node[1]) {
        this.swap(this.collection, i, min);
        i = min;
      } else break;
    }
  };

  this.front = function() {
    return this.collection[0];
  };
  this.size = function() {
    return this.collection.length;
  };
  this.isEmpty = function() {
    return this.size() == 0;
  };
}
