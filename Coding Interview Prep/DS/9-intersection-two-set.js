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
    let secondSet = otherSet;
    firstSet.forEach(el => {
      if (secondSet.indexOf(el) !== -1) {
        intersectionSet.add(el);
      }
    });
    return intersectionSet.values();
  };
}

let setA = new ProxySet();
setA.add(1);
setA.add(2);
setA.add(3);

console.log(setA.union([2, 5]));
console.log(setA.intersection([2, 5]));
