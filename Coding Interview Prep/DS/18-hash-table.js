let called = 0;
let hash = string => {
  called++;
  let hashed = 0;
  for (let i = 0; i < string.length; i++) hashed += string.charCodeAt(i);
  return hashed;
};

let HashTable = function() {
  this.collection = {};

  this.add = function(key, val) {
    let hashedKey = hash(key);
    if (!this.collection.hasOwnProperty(hashedKey)) {
      this.collection[hashedKey] = {};
    }
    this.collection[hashedKey][key] = val;
  };

  this.remove = function(key) {
    let hashedObj = this.collection[hash(key)];
    if (hashedObj.hasOwnProperty(key)) delete hashedObj[key];
    if (!Object.keys(hashedObj).length) delete this.collection[hash(key)];
  };

  this.lookup = function(key) {
    let hashKey = hash(key);
    if (this.collection.hasOwnProperty(hashKey))
      return this.collection[hashKey][key];
    return null;
  };
};

let hashTable = new HashTable();
hashTable.add("one", 1);
