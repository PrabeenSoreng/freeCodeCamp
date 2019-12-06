let Node = function(element) {
  this.element = element;
  this.next = null;
};

let Kitten = new Node("Kitten");
let Puppy = new Node("Puppy");
Kitten.next = Puppy;

let Cat = new Node("Cat");
let Dog = new Node("Puppy");
Puppy.next = Cat;
Cat.next = Dog;

console.log(Kitten);
