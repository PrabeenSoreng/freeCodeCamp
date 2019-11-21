// Mine Solution
function sumPrimes(num) {
  let primeArr = [];
  for (let i = 1; i <= num; i++) {
    let count = 0;
    for (let j = i; j > 0; j--) {
      if (i % j == 0) count++;
    }
    if (count == 2) primeArr.push(i);
  }
  return primeArr.reduce((acc, cur) => acc + cur);
}

// Solution 2
function sumPrimes(num) {
  let nums = Array.from({ length: num + 1 })
    .map((_, i) => i)
    .slice(2);
  for (let n in nums) {
    nums = nums.filter(val => val == nums[n] || val % nums[n] != 0);
  }
  return nums.reduce((prevSum, cur) => prevSum + cur);
}

// Solution 3
function sumPrimes(num) {
  // step 1
  let arr = Array.from({ length: num + 1 }, (v, k) => k).slice(2);
  // step 2
  let onlyPrimes = arr.filter(n => {
    let m = n - 1;
    while (m > 1 && m >= Math.sqrt(n)) {
      if (n % m === 0) return false;
      m--;
    }
    return true;
  });
  // step 3
  return onlyPrimes.reduce((a, b) => a + b);
}

console.log(sumPrimes(10));
