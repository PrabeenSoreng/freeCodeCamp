// Mine Solution
function sumFib(num) {
  let fibArr = [1, 1];
  let fib = 0;
  for (let i = 2; num > fib; i++) {
    fib = fibArr[i - 1] + fibArr[i - 2];
    if (num >= fib) fibArr.push(fib);
  }
  return fibArr.filter(el => el % 2 === 1).reduce((acc, cur) => acc + cur);
}

console.log(sumFib(75025));
