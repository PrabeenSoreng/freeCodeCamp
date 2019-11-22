var Person = function(firstAndLast) {
  let fullName = firstAndLast;

  this.getFirstName = function() {
    return fullName.split(" ").shift();
  };
  this.getLastName = function() {
    return fullName.split(" ").pop();
  };
  this.getFullName = function() {
    return fullName;
  };
  this.setFirstName = function(fname) {
    fullName = `${fname} ${fullName.split(" ").pop()}`;
  };
  this.setLastName = function(lname) {
    fullName = `${fullName.split(" ").shift()} ${lname}`;
  };
  this.setFullName = function(name) {
    fullName = name;
  };
};

var bob = new Person("Bob Ross");
console.log(bob.getFirstName());
console.log(bob.getLastName());
console.log(bob.getFullName());
bob.setFirstName("Haskell");
console.log(bob.getFullName());
bob.setFullName("Haskell Curry");
console.log(bob.getFirstName());
