function factorialize(num) {
  if (num === 0) return 1;
  else if (num === 1) return 1;
  else return factorialize(num - 1) * num;
}

console.log(factorialize(5));
