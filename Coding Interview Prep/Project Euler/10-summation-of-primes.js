function primeSummation(n) {
  let primes = [2],
    max = 0;
  let num = 3,
    isPrime = true;

  while (num < n) {
    max = Math.ceil(Math.sqrt(num));
    for (let i = 0; primes[i] <= max; i++) {
      if (num % primes[i] === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) primes.push(num);
    isPrime = true;
    num += 2;
  }
  return primes.reduce((a, c) => a + c);
}

console.log(primeSummation(2000000));
