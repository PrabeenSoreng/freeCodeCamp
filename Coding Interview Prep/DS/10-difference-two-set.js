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

  this.union = function(otherSet) {
    let unionSet = new ProxySet();
    let firstSet = this.values();
    let secondSet = otherSet;
    firstSet.forEach(el => {
      unionSet.add(el);
    });
    secondSet.forEach(el => {
      unionSet.add(el);
    });
    return unionSet.values();
  };

  this.intersection = function(otherSet) {
    let intersectionSet = new ProxySet();
    let firstSet = this.values();
    firstSet.forEach(el => {
      if (otherSet.indexOf(el) !== -1) intersectionSet.add(el);
    });
    return intersectionSet.values();
  };

  this.difference = function(otherSet) {
    let differenceSet = new ProxySet();
    let firstSet = this.values();
    firstSet.forEach(el => {
      if (otherSet.indexOf(el) === -1) differenceSet.add(el);
    });
    return differenceSet.values();
  };
}

const set1 = new ProxySet();
set1.add(1);
set1.add(2);
set1.add(3);

console.log(set1.difference([1, 2, 4, 5]));
