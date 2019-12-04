let ProxyMap = function() {
  this.collection = {};

  this.add = function(key, value) {
    this.collection[key] = value;
  };

  this.remove = function(key) {
    delete this.collection[key];
  };

  this.get = function(key) {
    return this.collection[key];
  };

  this.has = function(key) {
    if (this.collection[key]) return true;
    return false;
  };

  this.values = function() {
    return Object.values(this.collection);
  };

  this.size = function() {
    let keys = Object.keys(this.collection);
    return keys.length;
  };

  this.clear = function() {
    this.collection = {};
  };
};

let myMap = new Map();
myMap.set("freeCodeCamp", "Awesome!");
