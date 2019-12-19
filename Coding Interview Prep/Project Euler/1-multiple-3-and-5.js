function multipleof3and5(number) {
  let sum = 0;
  for (let i = 0; i < number; i++) {
    if (i % 3 === 0) {
      sum = sum + i;
      continue;
    }
    if (i % 5 === 0) sum = sum + i;
  }
  return sum;
}

console.log(multipleof3and5(1000));
