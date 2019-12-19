function fiboEvenSum(n) {
  let sum = 0;
  count = 0;

  let a = 0,
    b = 1;
  while (count < n) {
    let f = a + b;
    if (f % 2 === 0) {
      sum = sum + f;
    }
    a = b;
    b = f;
    count++;
  }
  return sum;
}

console.log(fiboEvenSum(10));
