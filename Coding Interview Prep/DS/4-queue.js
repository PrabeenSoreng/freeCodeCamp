function Queue() {
  var collection = [];
  this.print = function() {
    console.log(collection);
  };
  this.enqueue = function(val) {
    return collection.push(val);
  };
  this.dequeue = function() {
    return collection.shift();
  };
  this.front = function() {
    return [...collection].pop();
  };
  this.size = function() {
    return collection.length;
  };
  this.isEmpty = function() {
    if (collection.length == 0) return true;
    else return false;
  };
}

const queue = new Queue();
queue.print();
console.log(queue.enqueue(1));
queue.print();
console.log(queue.enqueue(2));
queue.print();
console.log(queue.dequeue());
queue.print();
