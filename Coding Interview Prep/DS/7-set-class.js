class Set {
  constructor() {
    this.collection = [];
  }

  has(element) {
    return this.collection.indexOf(element) !== -1;
  }

  values() {
    return this.collection;
  }

  add(element) {
    if (!this.has(element)) {
      this.collection.push(element);
      return true;
    } else return false;
  }

  remove(element) {
    if (this.has(element)) {
      let index = this.collection.indexOf(element);
      this.collection.splice(index, 1);
      return true;
    } else return false;
  }

  size() {
    return this.collection.length;
  }
}

const set = new Set();
set.add(1);
set.add(2);
console.log(set.remove(2));
console.log(set.values());
