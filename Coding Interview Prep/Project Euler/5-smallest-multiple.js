function smallestMult(n) {
  let numArr = [];
  for (let i = 1; i <= n; i++) {
    numArr.push(i);
  }
  function gcd(a, b) {
    return !b ? a : gcd(b, a % b);
  }

  function lcm(a, b) {
    return (a * b) / gcd(a, b);
  }

  let multiple = numArr[0];
  numArr.forEach(n => {
    multiple = lcm(multiple, n);
  });
  return multiple;
}

console.log(smallestMult(5));
