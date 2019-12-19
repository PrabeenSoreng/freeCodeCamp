function nthPrime(n) {
  let count = 0,
    c = 0;
  let prime = 0;
  for (let i = 2; i > 0; i++) {
    if (i % 2 === 0 && i !== 2) i++;
    c = 0;
    let number = i;
    for (let j = 1; j <= i; j++) {
      if (number % j === 0) c++;
    }
    if (c === 2) {
      prime = number;
      count++;
    }
    if (count == n) {
      break;
    }
  }
  return prime;
}

// Alternate solution
function nthPrime(n) {
  const primes = [2];
  let num = 3,
    isPrime = true;

  while (primes.length < n) {
    let max = Math.ceil(Math.sqrt(num));
    // console.log(max);
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
  return primes[primes.length - 1];
}

console.log(nthPrime(6));
