function sumSquareDifference(n) {
  let sumOfSquare = 0;
  let squareOfSum = 0,
    sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
    sumOfSquare += Math.pow(i, 2);
  }
  squareOfSum = Math.pow(sum, 2);
  return squareOfSum - sumOfSquare;
}

console.log(sumSquareDifference(100));
