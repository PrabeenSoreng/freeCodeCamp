class CircularQueue {
  constructor(size) {
    this.queue = [];
    this.read = 0;
    this.write = 0;
    this.max = size - 1;

    while (size > 0) {
      this.queue.push(null);
      size--;
    }
  }

  print() {
    console.log(this.queue);
    console.log("Read", this.read);
    console.log("Write", this.write);
    return this.queue;
  }

  enqueue(item) {
    if (this.write <= this.max && this.queue[this.write] === null) {
      this.queue[this.write] = item;
      this.write++;
      return item;
    } else if (this.write > this.max && this.queue[0] === null) {
      this.write = 0;
      this.queue[this.write] = item;
      this.write++;
      return item;
    } else return null;
  }

  dequeue() {
    if (this.read <= this.max && this.queue[this.read] !== null) {
      let item = this.queue[this.read];
      this.queue[this.read] = null;
      this.read++;
      return item;
    } else if (this.read > this.max && this.queue[0] !== null) {
      this.read = 0;
      let item = this.queue[this.read];
      this.queue[this.read] = null;
      this.read++;
      return item;
    } else return null;
  }
}

const circularQueue = new CircularQueue(5);
circularQueue.enqueue("Tom");
circularQueue.enqueue("Steve");
circularQueue.enqueue("Ramsey");
circularQueue.enqueue("Scarlet");
circularQueue.enqueue("Tony");
console.log(circularQueue.enqueue("Dom"));
circularQueue.dequeue();
circularQueue.dequeue();
circularQueue.dequeue();
circularQueue.dequeue();
circularQueue.dequeue();
console.log(circularQueue.dequeue());
circularQueue.enqueue("Tom");
circularQueue.enqueue("Steve");
circularQueue.enqueue("Ramsey");
circularQueue.enqueue("Scarlet");
circularQueue.enqueue("Tony");
circularQueue.dequeue();
circularQueue.dequeue();

circularQueue.print();
