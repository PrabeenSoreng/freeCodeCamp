function Stack() {
  let collection = [];
  this.print = function() {
    console.log(collection);
  };
  this.push = function(val) {
    return collection.push(val);
  };
  this.pop = function() {
    return collection.pop();
  };
  this.peek = function() {
    return [...collection].pop();
  };
  this.isEmpty = function() {
    if (collection.length == 0) return true;
    else return false;
  };
  this.clear = function() {
    collection = [];
    return collection;
  };
}

let stack = new Stack();
