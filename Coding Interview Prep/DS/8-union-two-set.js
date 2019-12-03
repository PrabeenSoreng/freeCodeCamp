function ProxySet() {
  let collection = [];

  this.has = function(element) {
    return collection.indexOf(element) !== -1;
  };

  this.values = function() {
    return collection;
  };

  this.add = function(element) {
    if (!this.has(element)) {
      collection.push(element);
      return true;
    }
    return false;
  };

  this.remove = function(element) {
    if (this.has(element)) {
      let index = collection.indexOf(element);
      collection.splice(index, 1);
      return true;
    }
    return false;
  };

  this.size = function() {
    return collection.length;
  };

  this.union = function(anotherSet) {
    const newSet = new ProxySet();
    const addToSet = el => newSet.add(el);
    this.values().forEach(addToSet);
    anotherSet.forEach(addToSet);
    return newSet.values();
  };
}

const set1 = new ProxySet();
set1.add("a");
set1.add("c");
set1.add("d");

console.log(set1.values());
console.log(set1.union(["b", "c", "d", "e"]));
