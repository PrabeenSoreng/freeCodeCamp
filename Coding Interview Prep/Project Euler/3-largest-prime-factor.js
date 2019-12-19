function largestPrimeFactor(number) {
  let max = 0,
    count = 1,
    c = 0;
  let primeArr = [];
  let range = number / 2;
  while (count <= range) {
    c = 0;
    for (let i = 1; i <= count; i++) {
      if (count % i === 0) c++;
      if (c > 2) break;
    }
    if (c === 2) {
      primeArr.push(count);
    }
    count++;
  }
  c = 0;
  for (let i = 1; i <= number; i++) {
    if (number % i === 0) c++;
  }
  if (c === 2) {
    primeArr.push(number);
  }
  // console.log(primeArr);
  let primeFactor = [];
  for (let n of primeArr) {
    if (number % n === 0) primeFactor.push(n);
  }
  return primeFactor.pop();
}

// Alternate Solution
function largestPrimeFactor(number) {
  let prime = 2,
    max = 1,
    primeArr = [];

  while (prime <= number) {
    if (number % prime === 0) {
      max = prime;
      number = number / prime;
      primeArr.push(prime);
    } else prime++;
  }
  console.log(primeArr);
  return max;
}

// console.log(largestPrimeFactor(600851475143));
console.log(largestPrimeFactor(4));
